document.addEventListener("DOMContentLoaded", () => {
  const profil = `
    <div class="space-y-6 text-sm leading-relaxed">
      <div>
        <p class="font-bold">📍 Profil Singkat Bukateja:</p>
        <ul class="list-disc ml-5">
          <li>Provinsi: Jawa Tengah</li>
          <li>Kabupaten: Purbalingga</li>
          <li>Jumlah Desa: Sekitar 19 desa</li>
          <li>Kode Pos: 53382</li>
          <li>Letak Geografis: Sebelah timur dari pusat kota Purbalingga, dekat perbatasan dengan Kabupaten Banyumas.</li>
        </ul>
      </div>

      <div>
        <p class="font-bold">🧑‍🌾 Kehidupan dan Ekonomi:</p>
        <ul class="list-disc ml-5">
          <li>Mayoritas penduduknya bekerja di sektor pertanian, peternakan, dan industri rumahan.</li>
          <li>Terdapat pasar tradisional yang cukup aktif sebagai pusat ekonomi masyarakat.</li>
          <li>Bukateja juga dikenal memiliki masyarakat yang religius dan berbudaya kuat.</li>
        </ul>
      </div>

      <div>
        <p class="font-bold">📖 Budaya dan Agama:</p>
        <ul class="list-disc ml-5">
          <li>Islam adalah agama mayoritas.</li>
          <li>Terdapat banyak pondok pesantren, masjid besar, dan kegiatan keagamaan rutin seperti pengajian dan tahlilan.</li>
          <li>Kesenian tradisional seperti hadrah, rebana, dan kuda lumping masih sering ditampilkan dalam acara hajatan.</li>
        </ul>
      </div>

      <div>
        <p class="font-bold">🏫 Pendidikan:</p>
        <ul class="list-disc ml-5">
          <li>Tersedia beberapa SD, SMP, dan SMA/SMK.</li>
          <li>Ada juga lembaga pendidikan Islam seperti Madrasah dan TPQ.</li>
        </ul>
      </div>

      <div>
        <p class="font-bold">🚌 Akses dan Transportasi:</p>
        <ul class="list-disc ml-5">
          <li>Dilewati jalur provinsi yang menghubungkan Purwokerto – Purbalingga – Klampok – Banjarnegara.</li>
          <li>Tersedia angkutan umum seperti bus kecil dan ojek desa.</li>
        </ul>
      </div>
    </div>
  `;

  const tentang = `
    <div class="space-y-6 text-sm leading-relaxed">
      <div class="grid md:grid-cols-2 gap-6">
        <img src="peta bukateja.jpg" class="rounded">
        <div>
          <p class="font-bold">📍 Letak dan Wilayah:</p>
          <p>Desa Bukateja merupakan salah satu desa di Kecamatan Bukateja, Kabupaten Purbalingga, Provinsi Jawa Tengah. Terletak di wilayah timur Purbalingga.</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <img src="masjid-besar-nurul-falah.jpg" class="rounded">
        <div>
          <p class="font-bold">🕌 Keagamaan dan Budaya:</p>
          <p>Desa Bukateja memiliki masyarakat yang religius dan menjunjung tinggi nilai-nilai sosial dan budaya. Mayoritas penduduknya beragama Islam, dan kegiatan keagamaan berjalan sangat aktif melalui masjid, musholla, pengajian rutin, dan berbagai peringatan hari besar Islam.</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <img src="sedang_1643768209sawah.jpg" class="rounded">
        <div>
          <p class="font-bold">👨‍👩‍👧‍👦 Kependudukan dan Sosial Ekonomi:</p>
          <p>Mayoritas penduduk Desa Bukateja bermata pencaharian sebagai petani, pedagang, pegawai, dan perantau. Banyak juga warga yang bekerja di luar kota atau luar negeri, yang kemudian berkontribusi terhadap pembangunan desa melalui remitansi.</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <img src="web-slide1.jpg" class="rounded">
        <div>
          <p class="font-bold">🎓 Pendidikan:</p>
          <p>Fasilitas pendidikan di Desa Bukateja cukup lengkap, meliputi:</p>
          <ul class="list-disc ml-5">
            <li>Beberapa Sekolah Dasar</li>
            <li>SMP dan SMA/sederajat</li>
            <li>Akses ke SMK/SMA yang dekat, termasuk wilayah Purbalingga</li>
            <li>Lembaga pendidikan nonformal seperti Madrasah Diniyah, Kelompok Belajar, TPQ, PAUD</li>
          </ul>
          <p>Kondisi masyarakat terhadap pendidikan sangat tinggi, dibuktikan dengan semangat belajar hingga jenjang perguruan tinggi.</p>
        </div>
      </div>
    </div>
  `;

  document.getElementById("profil-content").innerHTML = profil;
  document.getElementById("tentang-content").innerHTML = tentang;
});
