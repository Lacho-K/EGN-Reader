function Clear()
{
  document.getElementById("EGN").value = "";
  document.getElementById("Valider").innerHTML = "";
  document.getElementById("Info").innerHTML = "";
}

function CheckEGN(egn)
{
    if(egn.value.length != 10)
    {
        return false;
    }

    for (let i = 0; i < egn.value.length; i++) 
    {
        if(egn.value[i] < '0' || egn.value[i] > '9')
        {
            return false;
        }
    }

    let checkSum = 0;
    let weight = [2,4,8,5,10,9,7,3,6];

    for (let i = 0; i < 9; i++) {
        checkSum += (egn.value[i] - '0') * weight[i];       
    }

    checkSum %= 11;
    if(checkSum == 10)
    {
        checkSum = 0;
    }

    console.log(checkSum);

    if(checkSum != (egn.value[9] - '0'))
    {
        return false;
    }

    let year = parseInt(egn.value.substring(0,2));
    let month = parseInt(egn.value.substring(2,4));
    let day = parseInt(egn.value.substring(4,6));
    let regionCode = egn.value.substring(6,9);
    let region = GetRegion(regionCode);
    let regionStart = region.split(' ')[1];
    let regionName = region.split(' ')[0];
    let kidsCount = Math.floor(parseInt(egn.value.substring(6,9) - regionStart)/2);
    let kid = DetermineGender(regionCode, kidsCount);    

    if (month> 40) 
    {
        month -= 40;
        year  += 2000;
    } 
    else
    if (month > 20)
    {
        month -= 20;
        year  += 1800;
    } 
    else 
    {
        year  += 1900;
    }

    console.log("Year:" + year);
    console.log("Month:" + month);
    console.log("Day:" + day);
    let dict= 
    {
        01:"Януари",
        02:"Февруари",
        03:"Март",
        04:"Април",
        05:"Май",
        06:"Юни",
        07:"Юли",
        08:"Август",
        09:"Септември",
        10:"Октомври",
        11:"Ноември",
        12:"Декември",
    };

    document.getElementById("EGN-Info").innerHTML = "EGN Info:";
    if((egn.value[8] - '0') % 2 == 0)
    {             
        if(kidsCount < 1)
        {
                document.getElementById("Info").innerHTML = "Мъж роден на " + day  + " " + dict[month] + " " + year + "г. в регион " + regionName + " като е бил първото момче родено в този ден и регион.";
        }
        else if(kidsCount == 1)
        {
            document.getElementById("Info").innerHTML = "Мъж роден на " + day  + " " + dict[month] + " " + year + "г. в регион " + regionName + " като преди него в този ден и регион се e родилo " + kidsCount + " " + kid;
        }
        else if(kidsCount > 1)
        {
            document.getElementById("Info").innerHTML = "Мъж роден на " + day  + " " + dict[month] + " " + year + "г. в регион " + regionName + " като преди него в този ден и регион са се родили " + kidsCount + " " + kid;       
        }
    }
    else if((egn.value[8] - '0') % 2 != 0)

       if(kidsCount < 1)
        {
            document.getElementById("Info").innerHTML = "Жена родена на " + day + " " + dict[month] + " " + year + "г. в регион " + regionName + " като е била първото момиче родено в този ден и регион.";
        }
        else if(kidsCount == 1)
        {
            document.getElementById("Info").innerHTML = "Жена родена на " + day + " " + dict[month] + " " + year + "г. в регион " + regionName + " като преди нея в този ден и регион се е родило " + kidsCount + " " + kid;
        }
        else if(kidsCount > 1)
        {
            document.getElementById("Info").innerHTML = "Жена родена на " + day + " " + dict[month] + " " + year + "г. в регион " + regionName + " като преди нея в този ден и регион са се родили " + kidsCount + " " + kid;
        }
    console.log(regionStart);
    return true;
    
}
function CheckIfValid(egnCheck)
{
    if(egnCheck)
    {
        document.getElementById("Valider").innerHTML = "Валидно";
        document.getElementById("Valider").style = "color:green";
    }
    else
    {
        document.getElementById("Valider").innerHTML = "Невалидно";
        document.getElementById("Valider").style = "color:red";
    }
}
function GetRegion(regionRaw)
{
    let regionNum = parseInt(regionRaw);
    if(regionNum >= 0 && regionNum <= 43)
    {
        return "Благоевград 0";
    }
    else if(regionNum >= 44 && regionNum <= 93)
    {
        return "Бургас 44";
    }
    else if(regionNum >= 94 && regionNum <=139)
    {
        return "Варна 94";
    }
    else if(regionNum >= 140 && regionNum <=169)
    {
        return "Велико Търново 140";
    }
    else if(regionNum >= 170 && regionNum <=183)
    {
        return "Видин 170";
    }
    else if(regionNum >= 184 && regionNum <=217)
    {
        return "Враца 184";
    }
    else if(regionNum >= 218 && regionNum <=233)
    {
        return "Габрово 218";
    }
    else if(regionNum >= 234 && regionNum <=281)
    {
        return "Кърджали 234";
    }
    else if(regionNum >= 282 && regionNum <=301)
    {
        return "Кюстендил 282";
    }
    else if(regionNum >= 302 && regionNum <=319)
    {
        return "Ловеч 302";
    }
    else if(regionNum >= 320 && regionNum <=341)
    {
        return "Монтана 320";
    }
    else if(regionNum >= 342 && regionNum <=377)
    {
        return "Пазарджик 342";
    }
    else if(regionNum >= 378 && regionNum <=395)
    {
        return "Перник 378";
    }
    else if(regionNum >= 396 && regionNum <=435)
    {
        return "Плевен 396";
    }
    else if(regionNum >= 436 && regionNum <=501)
    {
        return "Пловдив 436";
    }
    else if(regionNum >= 502 && regionNum <=527)
    {
        return "Разград 502";
    }
    else if(regionNum >= 528 && regionNum <=555)
    {
        return "Русе 528";
    }
    else if(regionNum >= 556 && regionNum <=575)
    {
        return "Силистра 556";
    }
    else if(regionNum >= 576 && regionNum <=601)
    {
        return "Сливен 576";
    }
    else if(regionNum >= 602 && regionNum <=623)
    {
        return "Смолян 602";
    }
    else if(regionNum >= 624 && regionNum <=721)
    {
        return "София – град 624";
    }
    else if(regionNum >= 722 && regionNum <=751)
    {
        return "София – окръг 722";
    }
    else if(regionNum >= 752 && regionNum <=789)
    {
        return "Стара Загора 752";
    }
    else if(regionNum >= 790 && regionNum <=821)
    {
        return "Добрич (Толбухин) 790";
    }
    else if(regionNum >= 822 && regionNum <=843)
    {
        return "Търговище 822";
    }
    else if(regionNum >= 844 && regionNum <=871)
    {
        return "Хасково 844";
    }
    else if(regionNum >= 872 && regionNum <=903)
    {
        return "Шумен 872";
    }
    else if(regionNum >= 904 && regionNum <=925)
    {
        return "Ямбол 904";
    }
    else if(regionNum >= 926 && regionNum <=999)
    {
        return "Друг/Неизвестен 926";
    }
}
function DetermineGender(regCode, kidsCount)
{
    let isMale = parseInt(regCode) % 2 == 0;
    if(isMale)
    {
        if(kidsCount == 1)
        {
            return "момче";
        }
        return "момчета";
    }
    else
    {
        if(kidsCount == 1)
        {
            return "момиче";
        }
         return "момичета";
    }
}
