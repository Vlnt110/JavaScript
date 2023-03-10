function urutan(tinggiBadanSiswa) {
    let tinggi1, tinggi2, tinggi3;

    if (tinggiBadanSiswa[0] > tinggiBadanSiswa[1] && tinggiBadanSiswa[0] > tinggiBadanSiswa[2]) {
        tinggi1 = tinggiBadanSiswa[0];
        if (tinggiBadanSiswa[1] > tinggiBadanSiswa[2]) {
            tinggi2 = tinggiBadanSiswa[1];
            tinggi3 = tinggiBadanSiswa[2];
        }
        else{
            tinggi2 = tinggiBadanSiswa[2];
            tinggi3 = tinggiBadanSiswa[1];
        }
    }
    else if (tinggiBadanSiswa[1] > tinggiBadanSiswa[0] && tinggiBadanSiswa[1] > tinggiBadanSiswa[2]) {
        tinggi1 = tinggiBadanSiswa[1];
        if (tinggiBadanSiswa[0] > tinggiBadanSiswa[2]) {
            tinggi2 = tinggiBadanSiswa[0];
            tinggi3 = tinggiBadanSiswa[2];
        }
        else {
            tinggi2 = tinggiBadanSiswa[2];
            tinggi3 = tinggiBadanSiswa[0];
        }
    } else{
        tinggi1 = tinggiBadanSiswa[2];
        if (tinggiBadanSiswa[1] > tinggiBadanSiswa[0]) {
            tinggi2 = tinggiBadanSiswa[1];
            tinggi3 = tinggiBadanSiswa[0];
        }
        else {
            tinggi2 = tinggiBadanSiswa[0];
            tinggi3 = tinggiBadanSiswa[1];
        }
    } 
    return [tinggi1, tinggi2, tinggi3];
}

const tinggiBadanSiswa = [170, 165, 160];
const urutanTinggiBadanSiswa = urutan(tinggiBadanSiswa);

document.writeln(urutanTinggiBadanSiswa)