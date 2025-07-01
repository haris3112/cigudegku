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
        // Data awal (dummy data)
       let wisata = [
            {
                id: 1,
                nama: "Kebun Teh Cirangsad",
                lokasi: "Kebun Teh Cirangsad: Banyu Wangi, Kec. Cigudeg, Kabupaten Bogor, Jawa Barat 16660",
                deskripsi: "Destinasi wisata populer di Cigudeg yang menawarkan pemandangan kebun teh hijau luas dengan udara sejuk. Cocok untuk bersantai dan menikmati pemandangan alam. .",
                jenis: "Alam",
                gambar: "https://plus.unsplash.com/premium_photo-1692049122910-d8b131ed54c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VidW4lMjB0ZWh8ZW58MHx8MHx8fDA%3D"
            },
            {
                id: 2,
                nama: "Curug Rahong",
                lokasi: "Curug Rahong: Kampung Kedaung, Desa Rengasjajar, Kecamatan Cigudeg, Kabupaten Bogor, Jawa Barat",
                deskripsi: "Air terjun tersembunyi yang terletak di Kampung Kedaung, Desa Rengasjajar. .",
                jenis: "Alam",
                gambar: "https://images.unsplash.com/photo-1661238897562-a7adf13755a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VydWd8ZW58MHx8MHx8fDA%3D"
            }
        ];
        
        let usaha = [
            {
                id: 1,
                nama: "PT Wita Argo Mas",
                pemilik: "Adjie Chas",
                lokasi: "JDesa Banyu Wangi, Kecamatan Cigudeg, Kabupaten Bogor",
                deskripsi: " Pengembangan kavling kebun agrowisata dan budidaya vanili di Desa Banyu Wangi, Cigudeg.",
                jenis: "Retail",
                kontak: "08123456789",
                gambar: "https://images.unsplash.com/photo-1655356260504-f39b05df2221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlYnVufGVufDB8fDB8fHww"
            },
            {
                id: 2,
                nama: "Kerajinan emas",
                pemilik: "Siti Aminah",
                lokasi: "Komp. Kehutanan No.162, Jl. Bojong Baru, Bogor Barat",
                deskripsi: "Menyediakan berbagai kerajinan emas unik dan berkualitas.",
                jenis: "Kerajinan",
                kontak: "08234567890",
                gambar: "https://images.unsplash.com/photo-1717409014701-8e630ff057f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyaGlhc2FuJTIwZW1hc3xlbnwwfHwwfHx8MA%3D%3D"
            }
        ];
        
        // Fungsi untuk memuat data wisata
        function loadWisata() {
            const container = document.getElementById('wisata-cards');
            container.innerHTML = '';
            
            wisata.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="card-image">
                        <img src="${item.gambar}" alt="${item.deskripsi.substring(0, 100)}" />
                    </div>
                    <div class="card-content">
                        <h3>${item.nama}</h3>
                        <p><strong>Lokasi:</strong> ${item.lokasi}</p>
                        <p><strong>Jenis:</strong> ${item.jenis}</p>
                        <p>${item.deskripsi.substring(0, 100)}...</p>
                        <div class="card-actions">
                            <button class="btn" onclick="editWisata(${item.id})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteWisata(${item.id})">Hapus</button>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }
        
        // Fungsi untuk memuat data usaha
        function loadUsaha() {
            const container = document.getElementById('usaha-cards');
            container.innerHTML = '';
            
            usaha.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="card-image">
                        <img src="${item.gambar}" alt="${item.deskripsi.substring(0, 100)}" />
                    </div>
                    <div class="card-content">
                        <h3>${item.nama}</h3>
                        <p><strong>Pemilik:</strong> ${item.pemilik}</p>
                        <p><strong>Lokasi:</strong> ${item.lokasi}</p>
                        <p><strong>Kontak:</strong> ${item.kontak}</p>
                        <p>${item.deskripsi.substring(0, 100)}...</p>
                        <div class="card-actions">
                            <button class="btn" onclick="editUsaha(${item.id})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteUsaha(${item.id})">Hapus</button>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }
        
        // Fungsi untuk membuka modal wisata
        function openWisataModal(editId = null) {
            const modal = document.getElementById('wisata-modal');
            const title = document.getElementById('wisata-modal-title');
            const form = document.getElementById('wisata-form');
            
            if (editId) {
                // Mode edit
                title.textContent = 'Edit Wisata';
                const item = wisata.find(w => w.id === editId);
                
                document.getElementById('wisata-id').value = item.id;
                document.getElementById('wisata-nama').value = item.nama;
                document.getElementById('wisata-lokasi').value = item.lokasi;
                document.getElementById('wisata-deskripsi').value = item.deskripsi;
                document.getElementById('wisata-jenis').value = item.jenis;
                document.getElementById('wisata-gambar').value = item.gambar;
            } else {
                // Mode tambah
                title.textContent = 'Tambah Wisata Baru';
                form.reset();
                document.getElementById('wisata-id').value = '';
            }
            
            modal.style.display = 'flex';
        }
        
        // Fungsi untuk membuka modal usaha
        function openUsahaModal(editId = null) {
            const modal = document.getElementById('usaha-modal');
            const title = document.getElementById('usaha-modal-title');
            const form = document.getElementById('usaha-form');
            
            if (editId) {
                // Mode edit
                title.textContent = 'Edit Usaha';
                const item = usaha.find(u => u.id === editId);
                
                document.getElementById('usaha-id').value = item.id;
                document.getElementById('usaha-nama').value = item.nama;
                document.getElementById('usaha-pemilik').value = item.pemilik;
                document.getElementById('usaha-lokasi').value = item.lokasi;
                document.getElementById('usaha-deskripsi').value = item.deskripsi;
                document.getElementById('usaha-jenis').value = item.jenis;
                document.getElementById('usaha-kontak').value = item.kontak;
                document.getElementById('usaha-gambar').value = item.gambar;
            } else {
                // Mode tambah
                title.textContent = 'Tambah Usaha Baru';
                form.reset();
                document.getElementById('usaha-id').value = '';
            }
            
            modal.style.display = 'flex';
        }
        
        // Fungsi untuk menutup modal
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }
        
        // Fungsi untuk menghapus wisata
        function deleteWisata(id) {
            if (confirm('Apakah Anda yakin ingin menghapus wisata ini?')) {
                wisata = wisata.filter(w => w.id !== id);
                loadWisata();
            }
        }
        
        // Fungsi untuk menghapus usaha
        function deleteUsaha(id) {
            if (confirm('Apakah Anda yakin ingin menghapus usaha ini?')) {
                usaha = usaha.filter(u => u.id !== id);
                loadUsaha();
            }
        }
        
        // Fungsi untuk mengedit wisata
        function editWisata(id) {
            openWisataModal(id);
        }
        
        // Fungsi untuk mengedit usaha
        function editUsaha(id) {
            openUsahaModal(id);
        }
        
        // Event listener untuk form wisata
        document.getElementById('wisata-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const id = document.getElementById('wisata-id').value;
            const nama = document.getElementById('wisata-nama').value;
            const lokasi = document.getElementById('wisata-lokasi').value;
            const deskripsi = document.getElementById('wisata-deskripsi').value;
            const jenis = document.getElementById('wisata-jenis').value;
            const gambar = document.getElementById('wisata-gambar').value;
            
            if (id) {
                // Edit existing
                const index = wisata.findIndex(w => w.id == id);
                if (index !== -1) {
                    wisata[index] = { id: parseInt(id), nama, lokasi, deskripsi, jenis, gambar };
                }
            } else {
                // Add new
                const newId = wisata.length > 0 ? Math.max(...wisata.map(w => w.id)) + 1 : 1;
                wisata.push({ id: newId, nama, lokasi, deskripsi, jenis, gambar });
            }
            
            loadWisata();
            closeModal('wisata-modal');
        });
        
        // Event listener untuk form usaha
        document.getElementById('usaha-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const id = document.getElementById('usaha-id').value;
            const nama = document.getElementById('usaha-nama').value;
            const pemilik = document.getElementById('usaha-pemilik').value;
            const lokasi = document.getElementById('usaha-lokasi').value;
            const deskripsi = document.getElementById('usaha-deskripsi').value;
            const jenis = document.getElementById('usaha-jenis').value;
            const kontak = document.getElementById('usaha-kontak').value;
            const gambar = document.getElementById('usaha-gambar').value;
            
            if (id) {
                // Edit existing
                const index = usaha.findIndex(u => u.id == id);
                if (index !== -1) {
                    usaha[index] = { id: parseInt(id), nama, pemilik, lokasi, deskripsi, jenis, kontak, gambar };
                }
            } else {
                // Add new
                const newId = usaha.length > 0 ? Math.max(...usaha.map(u => u.id)) + 1 : 1;
                usaha.push({ id: newId, nama, pemilik, lokasi, deskripsi, jenis, kontak, gambar });
            }
            
            loadUsaha();
            closeModal('usaha-modal');
        });
        
        // Memuat data saat halaman dimuat
        window.onload = function() {
            loadWisata();
            loadUsaha();
        };
