const out = []; //Se guardará lo que se imprimirá al dar aceptar//
const save = []; //Se guardaran los valores que ingrese el usuario//
const btnContainer = document.querySelector('.button--container');

window.onload = () =>
{
    const billForm = document.querySelector('.form');
    billForm.onsubmit = (e) =>
    {
        e.preventDefault();  
        const fiftyBill = document.querySelector('.fifty');
        const twentyBill = document.querySelector('.twenty');
        const tenBill = document.querySelector('.ten');
        const fif = fiftyBill.value;
        const twe = twentyBill.value;
        const ten = tenBill.value;
        //Al dar en acpeptar se eliminaran los valores anteriores de save, out y el boton//
        save.splice(0, 3);
        out.splice(0,1);
        btnRemove();
        result(fif, twe, ten);
    }
}

result = (fif, twe, ten) =>//Verificación de valores y calculo del total//
{
    let fifProduct = fif * 50;
    let tweProduct = twe * 20;
    let tenProduct = ten * 10;
    if(fif >= 20 && twe >= 20 && ten >=20)
    {
        let number = fifProduct + tweProduct + tenProduct;
        let numberText = 'The total money of the cash machine is: ' + number + '$';
        out.push(numberText);
        save.push(fif);
        save.push(twe);
        save.push(ten);
        numberSave = number;
        add();
        btn();
    }
    else 
    {
        const text = 'One of the values is incorrect, try again.';
        out.push(text);
        add();
    }
}

add = () => //Se imprime el valor del array out//
{
    const output = document.querySelector('.output--container');
    const outputBox = out.map(x => '<span>' + x + '</span>');
    output.innerHTML = outputBox;
}

btn = () => //Se genera el botón para ir al cajero//
{
    const button = document.createElement('button');
    button.innerText = 'Save and go to the cash machine';
    btnContainer.append(button);
    button.addEventListener('click', function ()
    {
        document.location.href = '../CAJERO/cajero.html';
        let fV = save[0];
        let sV = save[1];
        let tV = save[2];
        localStorage.firstV = fV;
        localStorage.secondV = sV;
        localStorage.thirdV = tV;
        localStorage.totalNumber = numberSave;
    })
}
btnRemove = () =>
{
    btnContainer.querySelectorAll('*').forEach(n => n.remove());
}





