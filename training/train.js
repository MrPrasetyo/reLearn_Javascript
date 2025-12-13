function fungsiBaru (p1,p2) {
    let suit = ["Batu", "Gunting", "Kertas"];
    if ((p1 == suit[0] && p2 == suit[1]) || (p1 == suit[1] && p2 == suit[2]) || (p1 == suit[2] && p2 == suit[0])){
        console.log("Player 1 Menang")
    } else if(p1 == p2){
        console.log("Hasil keduanya Seri")
    } 
    else {
        console.log("Player 2 Menang")
    }

}