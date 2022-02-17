var size = prompt("Enter pp length");
size = round(size);

if(size <= 0)
{
    document.write("(.)");
}

else if(size == 1)
{
    document.write("8->");
}

else if(size > 1)
{
    document.write("8");
    for(let i = 0; i < size; i++)
    {
        document.write("=");
    }
    document.write(">")
}

if(size <= 0)
{
    document.write("<br>Dang that pp ain't even there! ;-; <br>You got the other thing :(");
}

else if(size > 0 && size < 5)
{
    document.write("<br>Smol ;c <br>No chick wants you ;(");
}

else if(size >= 5 && size <= 8)
{
    document.write("<br>Big ;) <br>Chicks want that glock ;)");
}

else if(size > 8 && size < 12)
{
    document.write("<br>Sure u ain't cappin? <br>Cuz damn that sh*t massive! <br>Chicks going crazy for that cannon!");
}

else
{
    document.write("<br> You're cappinggggg! <br>Sh*t like that don't grow on trees... or humans!")
}

function round(f)
{
    f *= 100;
    f = Math.round(f);
    f /= 100;

    return f;
}