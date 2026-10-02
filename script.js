function inputdata(event) {
  event.preventDefault();
  let data1 = document.getElementById("note").value;
  let data2 = document.getElementById("label").value;
  // data dalam object
  let siswa = JSON.parse(localStorage.getItem("siswa")) || [];
  siswa.push({ note: data1,label: data2 });
  // input data
  localStorage.setItem("siswa", JSON.stringify(siswa));
  // tampilkan dan ambil data
  console.log(JSON.parse(localStorage.getItem("siswa")));

  tampilkan();
}
// tampil data localstorage
function tampilkan() {
  let data = JSON.parse(localStorage.getItem("siswa"));
  const ul = document.getElementById("data-tampil");
  ul.innerHTML = "";

  data.forEach((item,index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.note} - ${item.label}
    <button onclick="hapusSatu(${index})">Hapus</button>
    `;

     ul.appendChild(li);
    // li.textContent = `${item.note} - ${item.label}`;
    // ul.appendChild(li);
  });
}
tampilkan();

// Menghapus satu data
function hapusSatu(index) {
  let data = JSON.parse(localStorage.getItem("siswa")) || [];

    // Konfirmasi sebelum menghapus
  let yakin = confirm("Apakah kamu yakin ingin menghapus data ini?");

  if (yakin) {
    // Hapus berdasarkan index
    data.splice(index, 1);

    // Simpan kembali ke localStorage
    localStorage.setItem("siswa", JSON.stringify(data));

    // Tampilkan ulang
    tampilkan();
  }
}

// delete data localstorage
function deletedata() {
  localStorage.clear();
  tampilkan();
}
// panggil function
// inputdata();
