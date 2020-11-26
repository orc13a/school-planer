function addRow() {
    var table = document.getElementById('x');
    
    var tr = document.createElement('tr');
    table.appendChild(tr);

    var tdHeader = document.createElement('td');
    tdHeader.setAttribute('class', 'task-title');
    tr.appendChild(tdHeader);

    var tdHeadersInput = document.createElement('input');
    tdHeadersInput.setAttribute('type', 'text');
    tdHeadersInput.setAttribute('class', 'thInput');
    tdHeadersInput.setAttribute('placeholder', 'Skriv her');
    tdHeader.appendChild(tdHeadersInput);

    var tdMon = document.createElement('td');
    tr.appendChild(tdMon);

    var taMon = document.createElement('textarea');
    taMon.setAttribute('class', 'dayTextarea');
    taMon.setAttribute('placeholder', 'Hvad skal der laves?');
    tdMon.appendChild(taMon);

    var tdTue = document.createElement('td');
    tr.appendChild(tdTue);

    var taTue = document.createElement('textarea');
    taTue.setAttribute('class', 'dayTextarea');
    taTue.setAttribute('placeholder', 'Hvad skal der laves?');
    tdTue.appendChild(taTue);

    var tdWen = document.createElement('td');
    tr.appendChild(tdWen);

    var taWen = document.createElement('textarea');
    taWen.setAttribute('class', 'dayTextarea');
    taWen.setAttribute('placeholder', 'Hvad skal der laves?');
    tdWen.appendChild(taWen);

    var tdTur = document.createElement('td');
    tr.appendChild(tdTur);

    var taTur = document.createElement('textarea');
    taTur.setAttribute('class', 'dayTextarea');
    taTur.setAttribute('placeholder', 'Hvad skal der laves?');
    tdTur.appendChild(taTur);

    var tdFri = document.createElement('td');
    tr.appendChild(tdFri);

    var taFri = document.createElement('textarea');
    taFri.setAttribute('class', 'dayTextarea');
    taFri.setAttribute('placeholder', 'Hvad skal der laves?');
    tdFri.appendChild(taFri);

    var tdSat = document.createElement('td');
    tr.appendChild(tdSat);

    var taSat = document.createElement('textarea');
    taSat.setAttribute('class', 'dayTextarea');
    taSat.setAttribute('placeholder', 'Hvad skal der laves?');
    tdSat.appendChild(taSat);

    var tdSun = document.createElement('td');
    tr.appendChild(tdSun);

    var taSun = document.createElement('textarea');
    taSun.setAttribute('class', 'dayTextarea');
    taSun.setAttribute('placeholder', 'Hvad skal der laves?');
    tdSun.appendChild(taSun);
}