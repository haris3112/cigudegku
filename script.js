function loadWisata() {
    fetch('wisata.php?aksi=get')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('wisata-cards');
        container.innerHTML = '';
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-image"><img src="${item.gambar}" /></div>
                <div class="card-content">
                    <h3>${item.nama}</h3>
                    <p><strong>Lokasi:</strong> ${item.lokasi}</p>
                    <p><strong>Jenis:</strong> ${item.jenis}</p>
                    <p>${item.deskripsi}</p>
                    <button onclick="hapusWisata(${item.id})">Hapus</button>
                </div>`;
            container.appendChild(card);
        });
    });
}

function tambahWisata(data) {
    fetch('wisata.php?aksi=tambah', {
        method: 'POST',
        body: new URLSearchParams(data)
    }).then(() => loadWisata());
}

function hapusWisata(id) {
    fetch('wisata.php?aksi=hapus', {
        method: 'POST',
        body: new URLSearchParams({ id })
    }).then(() => loadWisata());
}

window.onload = loadWisata;
function loadUsaha() {
    fetch('usaha.php?aksi=get')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('usaha-cards');
        container.innerHTML = '';
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-image"><img src="${item.gambar}" /></div>
                <div class="card-content">
                    <h3>${item.nama}</h3>
                    <p><strong>Pemilik:</strong> ${item.pemilik}</p>
                    <p><strong>Lokasi:</strong> ${item.lokasi}</p>
                    <p><strong>Jenis:</strong> ${item.jenis}</p>
                    <p><strong>Kontak:</strong> ${item.kontak}</p>
                    <p>${item.deskripsi}</p>
                    <button onclick="hapusUsaha(${item.id})">Hapus</button>
                </div>`;
            container.appendChild(card);
        });
    });
}

function tambahUsaha(data) {
    fetch('usaha.php?aksi=tambah', {
        method: 'POST',
        body: new URLSearchParams(data)
    }).then(() => loadUsaha());
}

function hapusUsaha(id) {
    fetch('usaha.php?aksi=hapus', {
        method: 'POST',
        body: new URLSearchParams({ id })
    }).then(() => loadUsaha());
}

window.onload = () => {
    loadWisata();
    loadUsaha();
}