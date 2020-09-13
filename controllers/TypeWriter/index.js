export default class TypeWriter{

  writer(elemento){
    var text = elemento.innerHTML.split('');

    elemento.innerHTML = '';
    text.forEach((letra, i)=>{
      setTimeout(()  => elemento.innerHTML += letra, 100 * i)
    });
  };

  startWriter(elemento){

    setTimeout(()=>{

      this.writer(elemento);

      setInterval(() => {
        this.writer(elemento);
      },15000);

    }, 5000)

  }
}



