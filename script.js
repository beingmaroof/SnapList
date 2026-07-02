/* =====================================================
   SnapList — script.js
   Clean & simple task manager
===================================================== */

// ---- State ----
let todoList     = JSON.parse(localStorage.getItem('todoList'))     || [];
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
let categories   = JSON.parse(localStorage.getItem('categories'))   || [];
let sortPrefs    = JSON.parse(localStorage.getItem('sortPrefs'))    || { by: 'date', order: 'asc' };

let currentTab   = 'todo';
let activeFilter = null;      // null = All, else category id
let editCatId    = null;      // null = new, else editing

// ---- Backward compatibility ----
function migrate(list) {
  return list.map(item => ({
    id:       item.id || String(Date.now() + Math.random()),
    text:     item.text || '',
    date:     item.date || new Date().toISOString().slice(0,10),
    time:     item.time || '00:00',
    done:     !!item.done,
    priority: item.priority || 'medium',
    dueDate:  item.dueDate || null,
    category: item.category || null,
    tags:     item.tags || [],
    steps:    (item.steps || []).map(s => ({
      id:   s.id || String(Date.now() + Math.random()),
      text: s.text || '',
      done: !!s.done
    }))
  }));
}

todoList     = migrate(todoList);
shoppingList = migrate(shoppingList);

// ---- Persistence ----
function save()      { localStorage.setItem('todoList', JSON.stringify(todoList)); localStorage.setItem('shoppingList', JSON.stringify(shoppingList)); }
function saveCats()  { localStorage.setItem('categories', JSON.stringify(categories)); }
function saveSort()  { localStorage.setItem('sortPrefs', JSON.stringify(sortPrefs)); }

// ---- Helpers ----
function today() { return new Date().toISOString().slice(0,10); }

function esc(str) {
  return String(str || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ---- Toast ----
const toastEl = document.getElementById('toasts');
function toast(msg, type = 'info') {
  const div = document.createElement('div');
  div.className = `toast ${type}`;
  div.textContent = msg;
  toastEl.appendChild(div);
  setTimeout(() => { div.style.opacity='0'; div.style.transform='translateY(6px)'; div.style.transition='all .3s'; setTimeout(()=>div.remove(),300); }, 2800);
}

// ---- Theme ----
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
const themeSw = document.getElementById('themeSwitcher');
themeSw.checked = savedTheme === 'dark';

function updateToggleTrack() {
  const track = document.querySelector('.switch-track');
  if (track) track.classList.toggle('on', themeSw.checked);
}
updateToggleTrack();

themeSw.addEventListener('change', () => {
  const t = themeSw.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  updateToggleTrack();
});

// ---- Mobile sidebar ----
const sidebar  = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');
document.getElementById('menuBtn').addEventListener('click', () => {
  sidebar.classList.toggle('open');
  backdrop.classList.toggle('open');
});
backdrop.addEventListener('click', () => {
  sidebar.classList.remove('open');
  backdrop.classList.remove('open');
});

// ---- Tabs ----
const todoTab     = document.getElementById('todoTab');
const shoppingTab = document.getElementById('shoppingTab');
const pageTitle   = document.getElementById('pageTitle');

function switchTab(tab) {
  currentTab = tab;
  activeFilter = null;
  todoTab.classList.toggle('active',     tab === 'todo');
  shoppingTab.classList.toggle('active', tab === 'shopping');
  pageTitle.textContent = tab === 'todo' ? 'My Tasks' : 'Shopping List';
  sidebar.classList.remove('open');
  backdrop.classList.remove('open');
  renderChips();
  render();
}

todoTab.addEventListener('click',     () => switchTab('todo'));
shoppingTab.addEventListener('click', () => switchTab('shopping'));

// ---- Search ----
const searchRow    = document.getElementById('searchRow');
const searchInput  = document.getElementById('searchInput');
const searchToggle = document.getElementById('searchToggle');
const searchClose  = document.getElementById('searchClose');

searchToggle.addEventListener('click', () => {
  searchRow.classList.toggle('hidden');
  if (!searchRow.classList.contains('hidden')) searchInput.focus();
});

searchClose.addEventListener('click', () => {
  searchRow.classList.add('hidden');
  searchInput.value = '';
  render();
});

searchInput.addEventListener('input', render);

// ---- Sort ----
const sortByEl    = document.getElementById('sortBy');
const sortAscBtn  = document.getElementById('sortAsc');
const sortDescBtn = document.getElementById('sortDesc');
const resetSortBtn = document.getElementById('resetSort');

function initSort() {
  sortByEl.value = sortPrefs.by;
  sortAscBtn.classList.toggle('active',  sortPrefs.order === 'asc');
  sortDescBtn.classList.toggle('active', sortPrefs.order === 'desc');
}

sortByEl.addEventListener('change', () => { sortPrefs.by = sortByEl.value; saveSort(); render(); });

sortAscBtn.addEventListener('click', () => {
  sortPrefs.order = 'asc';
  sortAscBtn.classList.add('active'); sortDescBtn.classList.remove('active');
  saveSort(); render();
});

sortDescBtn.addEventListener('click', () => {
  sortPrefs.order = 'desc';
  sortDescBtn.classList.add('active'); sortAscBtn.classList.remove('active');
  saveSort(); render();
});

resetSortBtn.addEventListener('click', () => {
  sortPrefs = { by: 'date', order: 'asc' };
  saveSort(); initSort(); render();
});

function sortList(items) {
  const o = sortPrefs.order === 'asc' ? 1 : -1;
  return [...items].sort((a, b) => {
    switch (sortPrefs.by) {
      case 'dueDate':
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1; if (!b.dueDate) return -1;
        return o * (new Date(a.dueDate) - new Date(b.dueDate));
      case 'priority': {
        const p = { high:3, medium:2, low:1 };
        return o * (p[a.priority] - p[b.priority]);
      }
      case 'status':
        return o * (Number(a.done) - Number(b.done));
      case 'alphabetical':
        return o * a.text.localeCompare(b.text);
      default:
        return o * (new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));
    }
  });
}

// ---- Category chips ----
const categoryListEl = document.getElementById('categoryList');
const catSelector    = document.getElementById('categorySelector');
const filterAllBtn   = document.getElementById('filterAllBtn');

function renderChips() {
  // Clear old category chips (keep 'All' and '+ Category')
  categoryListEl.querySelectorAll('.chip:not(#filterAllBtn):not(#addCategoryBtn)').forEach(el => el.remove());

  filterAllBtn.classList.toggle('active', activeFilter === null);

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'chip' + (activeFilter === cat.id ? ' active' : '');
    if (activeFilter === cat.id) {
      btn.style.cssText = `background:${cat.color};border-color:${cat.color};color:#fff`;
    } else {
      btn.style.cssText = `border-color:${cat.color}33;color:${cat.color}`;
    }
    btn.innerHTML = `<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:${cat.color};margin-right:2px;"></span>${esc(cat.name)}`;
    btn.addEventListener('click', () => { activeFilter = cat.id; renderChips(); render(); });
    btn.addEventListener('contextmenu', e => { e.preventDefault(); openCatModal(cat.id); });
    categoryListEl.insertBefore(btn, document.getElementById('addCategoryBtn'));
  });

  // Refresh category dropdown in form
  const prev = catSelector.value;
  catSelector.innerHTML = '<option value="">No category</option>';
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id; opt.textContent = cat.name;
    catSelector.appendChild(opt);
  });
  catSelector.value = prev || '';
}

filterAllBtn.addEventListener('click', () => { activeFilter = null; renderChips(); render(); });

// ---- Category modal ----
const catModal      = document.getElementById('categoryModal');
const catModalTitle = document.getElementById('catModalTitle');
const catNameInput  = document.getElementById('categoryName');
const catColorInput = document.getElementById('categoryColor');
const deleteCatBtn  = document.getElementById('deleteCategory');

function openCatModal(id = null) {
  editCatId = id;
  if (id) {
    const c = categories.find(x => x.id === id);
    catNameInput.value  = c.name;
    catColorInput.value = c.color;
    catModalTitle.textContent = 'Edit Category';
    deleteCatBtn.classList.remove('hidden');
  } else {
    catNameInput.value  = '';
    catColorInput.value = '#e85d3e';
    catModalTitle.textContent = 'New Category';
    deleteCatBtn.classList.add('hidden');
  }
  catModal.classList.remove('hidden');
  catNameInput.focus();
}

function closeCatModal() { catModal.classList.add('hidden'); }

document.getElementById('addCategoryBtn').addEventListener('click', () => openCatModal());
document.getElementById('cancelCategory').addEventListener('click', closeCatModal);
document.getElementById('cancelCategoryFooter').addEventListener('click', closeCatModal);

document.getElementById('saveCategory').addEventListener('click', () => {
  const name  = catNameInput.value.trim();
  const color = catColorInput.value;
  if (!name) { toast('Please enter a category name', 'err'); return; }

  if (editCatId) {
    const c = categories.find(x => x.id === editCatId);
    if (c) { c.name = name; c.color = color; }
    toast('Category updated', 'ok');
  } else {
    categories.push({ id: Date.now().toString(), name, color });
    toast('Category created', 'ok');
  }
  saveCats(); renderChips(); closeCatModal(); render();
});

deleteCatBtn.addEventListener('click', () => {
  if (!editCatId) return;
  categories = categories.filter(c => c.id !== editCatId);
  todoList.forEach(i     => { if (i.category === editCatId) i.category = null; });
  shoppingList.forEach(i => { if (i.category === editCatId) i.category = null; });
  saveCats(); save(); renderChips();
  if (activeFilter === editCatId) activeFilter = null;
  closeCatModal(); render();
  toast('Category deleted', 'info');
});

// Colour swatches
document.getElementById('colorSwatches').addEventListener('click', e => {
  const sw = e.target.closest('.swatch');
  if (!sw) return;
  catColorInput.value = sw.dataset.color;
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('picked'));
  sw.classList.add('picked');
});

// ---- Add task ----
const itemInput    = document.getElementById('itemInput');
const addBtn       = document.getElementById('addBtn');
const clearAllBtn  = document.getElementById('clearAllBtn');
const dueDateInput = document.getElementById('dueDateInput');
const tagInput     = document.getElementById('tagInput');
const prioSelector = document.getElementById('prioritySelector');

function addItem() {
  const text = itemInput.value.trim();
  if (!text) { itemInput.focus(); return; }

  const now  = new Date();
  const tags = tagInput.value.trim()
    ? tagInput.value.split(',').map(t => t.trim()).filter(Boolean)
    : [];

  const item = {
    id:       Date.now().toString(),
    text,
    date:     now.toISOString().slice(0,10),
    time:     now.toLocaleTimeString('en-GB').slice(0,5),
    done:     false,
    priority: prioSelector.value,
    dueDate:  dueDateInput.value || null,
    category: catSelector.value || null,
    tags,
    steps:    []
  };

  (currentTab === 'todo' ? todoList : shoppingList).unshift(item);
  save();

  itemInput.value    = '';
  dueDateInput.value = '';
  tagInput.value     = '';
  prioSelector.value = 'medium';

  render();
  updateBadges();
  toast('Task added ✓', 'ok');
}

addBtn.addEventListener('click', addItem);
itemInput.addEventListener('keydown', e => { if (e.key === 'Enter') addItem(); });

clearAllBtn.addEventListener('click', () => {
  if (!confirm('Delete all tasks in this list?')) return;
  if (currentTab === 'todo') todoList = []; else shoppingList = [];
  save(); render(); updateBadges();
  toast('All tasks cleared', 'info');
});

// ---- Toggle done ----
function toggleDone(id) {
  const list = currentTab === 'todo' ? todoList : shoppingList;
  const item = list.find(i => i.id === id);
  if (item) { item.done = !item.done; save(); render(); }
}

// ---- Delete task ----
function deleteItem(id) {
  if (currentTab === 'todo') todoList = todoList.filter(i => i.id !== id);
  else shoppingList = shoppingList.filter(i => i.id !== id);
  save(); render(); updateBadges();
  toast('Task removed', 'info');
}

// ---- Steps ----
function addStep(itemId, text) {
  const list = currentTab === 'todo' ? todoList : shoppingList;
  const item = list.find(i => i.id === itemId);
  if (item) { item.steps.push({ id: Date.now().toString(), text, done: false }); save(); render(); }
}

function toggleStep(itemId, stepId) {
  const list = currentTab === 'todo' ? todoList : shoppingList;
  const item = list.find(i => i.id === itemId);
  if (item) { const s = item.steps.find(s => s.id === stepId); if(s) { s.done = !s.done; save(); render(); } }
}

function deleteStep(itemId, stepId) {
  const list = currentTab === 'todo' ? todoList : shoppingList;
  const item = list.find(i => i.id === itemId);
  if (item) { item.steps = item.steps.filter(s => s.id !== stepId); save(); render(); }
}

function removeTag(itemId, tag) {
  const list = currentTab === 'todo' ? todoList : shoppingList;
  const item = list.find(i => i.id === itemId);
  if (item) { item.tags = item.tags.filter(t => t !== tag); save(); render(); }
}

// ---- Due date label ----
function duePill(dueDate, done) {
  if (!dueDate) return `<span class="due-pill nodate">No due date</span>`;
  const tod = new Date(); tod.setHours(0,0,0,0);
  const due = new Date(dueDate); due.setHours(0,0,0,0);
  const fmt = due.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });

  if (!done && due < tod) {
    const days = Math.ceil((tod - due) / 86400000);
    return `<span class="due-pill overdue">⚠ ${fmt} · ${days}d overdue</span>`;
  }
  if (!done && due.getTime() === tod.getTime()) return `<span class="due-pill today">Today</span>`;
  return `<span class="due-pill future">📅 ${fmt}</span>`;
}

// ---- Priority badge ----
const prioLabels = { high: '↑ High', medium: '— Medium', low: '↓ Low' };

// ---- Update stats ----
function updateStats(list) {
  const total = list.length;
  const done  = list.filter(i => i.done).length;
  const pct   = total > 0 ? Math.round((done/total)*100) : 0;

  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `${pct}% complete`;
  document.getElementById('pageMeta').textContent = `${total} task${total!==1?'s':''} · ${done} done`;
}

function updateBadges() {
  document.getElementById('todoBadge').textContent     = todoList.length;
  document.getElementById('shoppingBadge').textContent = shoppingList.length;
}

// ---- Render ----
const itemListEl = document.getElementById('itemList');
const emptyEl    = document.getElementById('emptyState');

function render() {
  itemListEl.innerHTML = '';

  const raw = currentTab === 'todo' ? todoList : shoppingList;

  // Search filter
  const q = searchInput.value.toLowerCase();
  let list = q
    ? raw.filter(item => item.text.toLowerCase().includes(q) || (item.tags||[]).some(t => t.toLowerCase().includes(q)))
    : raw;

  // Category filter
  if (activeFilter) list = list.filter(i => i.category === activeFilter);

  // Sort
  list = sortList(list);

  emptyEl.classList.toggle('hidden', list.length > 0);
  updateStats(raw);

  list.forEach(item => {
    itemListEl.appendChild(buildItem(item));
  });
}

function buildItem(item) {
  const li = document.createElement('li');
  li.className = `task-item priority-${item.priority}${item.done ? ' done' : ''}`;
  li.dataset.id = item.id;

  const cat = item.category ? categories.find(c => c.id === item.category) : null;
  const catHTML = cat
    ? `<span class="cat-pill" style="background:${cat.color}15;color:${cat.color}">
         <span class="cat-dot" style="background:${cat.color}"></span>${esc(cat.name)}
       </span>`
    : '';

  const tagsHTML = (item.tags||[]).length
    ? item.tags.map(t => `<span class="tag-pill">#${esc(t)}<span class="tag-x" data-tag="${esc(t)}">×</span></span>`).join('')
    : '';

  const stepsDone  = (item.steps||[]).filter(s=>s.done).length;
  const stepsTotal = (item.steps||[]).length;
  const stepsPct   = stepsTotal > 0 ? Math.round((stepsDone/stepsTotal)*100) : 0;

  const stepsListHTML = (item.steps||[]).map(s => `
    <li class="step-row" data-step="${s.id}">
      <input type="checkbox" class="step-check" ${s.done?'checked':''} />
      <span class="step-text" contenteditable="true">${esc(s.text)}</span>
      <button class="step-del">×</button>
    </li>
  `).join('');

  li.innerHTML = `
    <input type="checkbox" class="task-check" ${item.done?'checked':''} />
    <div class="task-body">
      <div class="task-row1">
        <span class="task-title" contenteditable="true">${esc(item.text)}</span>
        <span class="p-badge ${item.priority}">${prioLabels[item.priority]}</span>
      </div>
      <div class="task-row2">
        <span class="meta-date">${item.date}</span>
        ${duePill(item.dueDate, item.done)}
        ${catHTML}
      </div>
      ${tagsHTML ? `<div class="task-tags">${tagsHTML}</div>` : ''}
      <div class="steps-wrap">
        ${stepsTotal > 0 ? `
          <div class="steps-hd">
            <span class="steps-lbl">${stepsDone}/${stepsTotal} steps</span>
            <div class="steps-bar-track"><div class="steps-bar-fill" style="width:${stepsPct}%"></div></div>
          </div>
        ` : ''}
        <ul class="steps-list">${stepsListHTML}</ul>
        <div class="add-step-row">
          <input type="text" class="step-inp" placeholder="Add a step…" />
          <button class="step-add-btn">+</button>
        </div>
      </div>
    </div>
    <div class="task-actions">
      <button class="del-btn" title="Delete">✕</button>
    </div>
  `;

  // Events
  li.querySelector('.task-check').addEventListener('change', () => toggleDone(item.id));

  const titleEl = li.querySelector('.task-title');
  titleEl.addEventListener('blur', () => {
    const list = currentTab === 'todo' ? todoList : shoppingList;
    const found = list.find(i => i.id === item.id);
    if (found) { found.text = titleEl.innerText.trim() || found.text; save(); }
  });
  titleEl.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); titleEl.blur(); } });

  li.querySelector('.del-btn').addEventListener('click', () => deleteItem(item.id));

  // Tags
  li.querySelectorAll('.tag-x').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); removeTag(item.id, btn.dataset.tag); });
  });

  // Steps
  li.querySelectorAll('.step-row').forEach(row => {
    const stepId = row.dataset.step;
    row.querySelector('.step-check').addEventListener('change', () => toggleStep(item.id, stepId));
    row.querySelector('.step-del').addEventListener('click', () => deleteStep(item.id, stepId));
    const stEl = row.querySelector('.step-text');
    stEl.addEventListener('blur', () => {
      const list = currentTab === 'todo' ? todoList : shoppingList;
      const found = list.find(i => i.id === item.id);
      if (found) { const s = found.steps.find(s => s.id === stepId); if(s) { s.text = stEl.innerText.trim()||s.text; save(); } }
    });
  });

  const stepInp = li.querySelector('.step-inp');
  const stepAddBtn = li.querySelector('.step-add-btn');
  const doAdd = () => { const v = stepInp.value.trim(); if(v) { addStep(item.id, v); stepInp.value=''; } };
  stepAddBtn.addEventListener('click', doAdd);
  stepInp.addEventListener('keydown', e => { if(e.key==='Enter') doAdd(); });

  return li;
}

// ---- Export / Import ----
document.getElementById('exportJsonBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify({ todoList, shoppingList, categories, sortPrefs }, null, 2)], { type:'application/json' });
  dl(blob, `snaplist-${today()}.json`);
  toast('Exported as JSON', 'ok');
});

document.getElementById('exportCsvBtn').addEventListener('click', () => {
  const esc2 = v => { v=String(v??''); return (v.includes(',')||v.includes('"'))?`"${v.replace(/"/g,'""')}"`:v; };
  const rows = (list, type) => list.map(i => [
    type, i.text, i.date, i.time, i.done, i.priority, i.dueDate||'', i.category||'',
    (i.tags||[]).join(';'), (i.steps||[]).map(s=>s.text).join(';')
  ].map(esc2).join(','));
  const csv = ['Type,Text,Date,Time,Done,Priority,DueDate,Category,Tags,Steps',
    ...rows(todoList,'Todo'), ...rows(shoppingList,'Shopping')].join('\n');
  dl(new Blob([csv],{type:'text/csv'}), `snaplist-${today()}.csv`);
  toast('Exported as CSV', 'ok');
});

document.getElementById('importBtn').addEventListener('click', () => document.getElementById('fileInput').click());

document.getElementById('fileInput').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const src = ev.target.result;
      if (file.name.endsWith('.json')) {
        const d = JSON.parse(src);
        if (!d.todoList||!d.shoppingList) throw new Error('Invalid format');
        todoList=migrate(d.todoList); shoppingList=migrate(d.shoppingList);
        categories=d.categories||[]; sortPrefs=d.sortPrefs||{by:'date',order:'asc'};
        save(); saveCats(); saveSort(); initSort(); renderChips(); render(); updateBadges();
        toast('Imported successfully!', 'ok');
      } else if (file.name.endsWith('.csv')) {
        importCsv(src);
      }
    } catch(err) { toast('Import failed: '+err.message, 'err'); }
  };
  reader.readAsText(file);
  e.target.value='';
});

function importCsv(csv) {
  const lines = csv.split('\n').slice(1).filter(Boolean);
  const nt=[], ns=[];
  lines.forEach(line => {
    const vals=[]; let cur='', q=false;
    for(const ch of line){ if(ch==='"'&&!q){q=true;}else if(ch==='"'&&q){q=false;}else if(ch===','&&!q){vals.push(cur);cur='';}else{cur+=ch;} }
    vals.push(cur);
    if(vals.length<10) return;
    const [type,text,date,time,done,priority,dueDate,category,tags,steps]=vals.map(v=>v.replace(/^"|"$/g,''));
    const item={ id:Date.now().toString()+Math.random(), text, date, time, done:done==='true', priority:priority||'medium', dueDate:dueDate||null, category:category||null,
      tags:tags?tags.split(';').filter(Boolean):[], steps:steps?steps.split(';').filter(Boolean).map((t,i)=>({id:String(i),text:t,done:false})):[] };
    if(type==='Todo') nt.push(item); else if(type==='Shopping') ns.push(item);
  });
  todoList=nt; shoppingList=ns; save(); render(); updateBadges();
  toast('CSV imported', 'ok');
}

function dl(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'),{href:url,download:name});
  document.body.appendChild(a); a.click();
  setTimeout(()=>{document.body.removeChild(a);URL.revokeObjectURL(url);},100);
}

// ---- Init ----
initSort();
renderChips();
render();
updateBadges();