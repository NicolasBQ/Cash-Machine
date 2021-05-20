    let fifty = parseInt(localStorage.getItem('firstV'));
    let twenty = parseInt(localStorage.getItem('secondV'));
    let ten = parseInt(localStorage.getItem('thirdV'));
    let totalV = parseInt(localStorage.getItem('totalNumber'));

    if(!fifty && !twenty && !ten && !totalV)//Valores por defecto//
    {
        fifty = 20;
        twenty = 20;
        ten = 20; 
        totalV = 1600;
    }
    
    let totalBills = [fifty, twenty, ten]; //Se guardan los valores ingresados por el usuario en el apartado admin//
    const totalMoney = document.querySelector('.total');
    const totalFifty = document.querySelector('.fifty');
    const totalTwenty = document.querySelector('.twenty');
    const totalTen = document.querySelector('.ten');
    renderScreenMoney(totalV, fifty, twenty, ten); 
    const billArr = [50, 20, 10];
    const keyboardArr = []; //Se almacenará el valor digitado por el usuario//

    function renderScreenMoney(totalM, totalF, totalTw, totalT)//Se imprime el número de billetes por cada billete//
    {
        totalMoney.innerText = totalM + '$';
        totalFifty.innerText = totalF;
        totalTwenty.innerText = totalTw;
        totalTen.innerText = totalT;
    }

    //Botones del teclado//
    const resultContainer = document.querySelector('.result');
    const welcomeTitle = document.querySelector('.welcome');
    const oneBtn = document.querySelector('.one');
    const twoBtn = document.querySelector('.two');
    const threeBtn = document.querySelector('.three');
    const fourBtn = document.querySelector('.four');
    const fiveBtn = document.querySelector('.five');
    const sixBtn = document.querySelector('.six');
    const sevenBtn = document.querySelector('.seven');
    const eightBtn = document.querySelector('.eight');
    const nineBtn = document.querySelector('.nine');
    const zeroBtn = document.querySelector('.zero');
    const backBtn = document.querySelector('.back--button');

    oneBtn.addEventListener('click', function(){addNumber(1)});
    twoBtn.addEventListener('click', function(){addNumber(2)});
    threeBtn.addEventListener('click', function(){addNumber(3)});
    fourBtn.addEventListener('click', function(){addNumber(4)});
    fiveBtn.addEventListener('click', function(){addNumber(5)});
    sixBtn.addEventListener('click', function(){addNumber(6)});
    sevenBtn.addEventListener('click', function(){addNumber(7)});
    eightBtn.addEventListener('click', function(){addNumber(8)});
    nineBtn.addEventListener('click', function(){addNumber(9)});
    zeroBtn.addEventListener('click', function(){addNumber(0)});
    backBtn.addEventListener('click', function()
    {
        keyboardArr.splice(keyboardArr.length - 1, 1);
        addScreen();
    })

    addNumber = (n) => 
    {
        keyboardArr.push(n);
        addScreen();
    }

    addScreen = () => //Se muestran los valores digitados por el usuario en pantalla//
    {
        welcomeTitle.style.display = 'none';
        resultContainer.style.display = 'block';
        resultContainer.style.fontSize = '1.6rem';
        let keyboardBox = keyboardArr.map(t => t);
        resultContainer.innerText = keyboardBox.join('');
    }

    const formValues = document.querySelector('.main--form');
        formValues.onsubmit = (e) =>
        {
            e.preventDefault();
            const inputName = document.querySelector('.name')
            const nameValue = inputName.value;
            let keyN = keyboardArr.join('');
            keyNumber = parseInt(keyN);
            checkData(nameValue, keyNumber);
        }

    checkData = (name, value) => //Se verifica que los valores ingresados sean validos//
    {
        if(!name && !value)
        {
            welcomeTitle.style.display = 'none';
            resultContainer.style.display = 'block';
            resultContainer.style.fontSize = '1.3rem';
            resultContainer.innerText = 'you must enter the data';
        }
        else if(!name)
        {
            welcomeTitle.style.display = 'none';
            resultContainer.style.display = 'block';
            resultContainer.style.fontSize = '1.3rem';
            resultContainer.innerText = 'you must enter your name';
        }
        else if(!value)
        {
            welcomeTitle.style.display = 'none';
            resultContainer.style.display = 'block';
            resultContainer.style.fontSize = '1.3rem';
            resultContainer.innerText = 'you must enter a value';
        }
        else if(value > totalV || value % 10 != 0)
        {
            welcomeTitle.style.display = 'none';
            resultContainer.style.display = 'block';
            resultContainer.style.fontSize = '1rem';
            resultContainer.innerText = 'you must enter a correct value(or go to admin section)';
        }
        else if(value === 10 && ten === 0)
        {
            welcomeTitle.style.display = 'none';
            resultContainer.style.display = 'block';
            resultContainer.style.fontSize = '1rem';
            resultContainer.innerText = 'there is no 10 bills, type other value or go to admin section';
        }
        else if(value === 20 && twenty === 0 && 10*ten < 20)
        {
            welcomeTitle.style.display = 'none';
            resultContainer.style.display = 'block';
            resultContainer.style.fontSize = '1rem';
            resultContainer.innerText = 'there is no 20 bills, type other value or go to admin section';
        }
        else if(value === 50 && fifty === 0 && (10*ten + 20*twenty) < 50)
        {
            welcomeTitle.style.display = 'none';
            resultContainer.style.display = 'block';
            resultContainer.style.fontSize = '1rem';
            resultContainer.innerText = 'there is no 50 bills, type other value or go to admin section';
        }
        else
        {
            billStyle(name, value);
            calcBill(value);
        }
    }



    //Se cambiara el estilo de la página para mostrar factura//
    const mainContainer = document.querySelector('.main');
    const screenContainer = document.querySelector('.screen--container');
    const screenMoney = document.querySelector('.screen--money');
    const backButton = document.createElement('button'); //Se crea el botón para regresar al cajero//

    billStyle = (finalN, finalV) =>
    {
        formValues.style.display = 'none';
        backButton.innerText = 'Go back to cash machine';
        mainContainer.append(backButton);
        backButton.classList.add('back--cash');
        mainContainer.style.height = '500px';
        screenContainer.style.height = '60%'
        screenContainer.style.flexDirection = 'column';
        screenMoney.style.width = 'auto';
        screenMoney.style.position = 'absolute';
        screenMoney.style.left = 'calc(50% - 97.5px)';
        screenMoney.style.top = '40%';
        screenMoney.style.display = 'flex';
        screenMoney.style.flexDirection = 'row';
        document.querySelector('.fif--container').style.fontSize = '1rem';
        document.querySelector('.twe--container').style.fontSize = '1rem';
        document.querySelector('.ten--container').style.fontSize = '1rem';
        totalMoney.style.display = 'none';
        totalFifty.style.fontSize = '1rem';
        totalTwenty.style.fontSize = '1rem';
        totalTen.style.fontSize = '1rem';
        resultContainer.style.width = '90%';
        resultContainer.innerText = 'dear ' + finalN + ' you get ' + finalV + '$';
        resultContainer.style.margin = '100px auto 30px auto';
        resultContainer.style.fontSize = '1.5rem'
    }

    calcBill = (value) => //Se calculá cuantos billetes de cada billete se deben entregar//
    {
        const billStorage = [];
        let num;
        difValue = totalV - value;
        let x = 0;
        let i = 0;
        while(value >=10)
            while(x < billArr.length)
            {
                while(i < totalBills.length)
                {
                    {
                        num = Math.floor(value / billArr[x]);
                        if(num > totalBills[i])
                        {
                            billStorage.push(totalBills[i]);
                            value = value - (totalBills[i] * billArr[x])
                        }
                        else
                        {
                            billStorage.push(num);
                            value = value - (num * billArr[x]);
                        }
                        x++;
                        i++            
                    }
                }
            }

        //Se imprime los billetes necesarios para completar valor//
        let finalFifty = billStorage[0];
        let finalTwenty = billStorage[1];
        let finalTen =  billStorage[2];
        
        totalMoney.innerText = difValue + '$';
        totalFifty.innerText = finalFifty;
        totalTwenty.innerText = finalTwenty;
        totalTen.innerText = finalTen;

        backButton.addEventListener('click', function() //Se restan los valores con los valores iniciales y se vuelve al cajero//
        {
            let fiftyDif = fifty - finalFifty;
            let twentyDif = twenty - finalTwenty;
            let tenDif = ten - finalTen;
            localStorage.firstV = fiftyDif;
            localStorage.secondV = twentyDif;
            localStorage.thirdV = tenDif;
            localStorage.totalNumber = difValue;
            document.location.href = 'cajero.html';
        })
    }



