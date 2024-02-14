let Details =[

        {
            studentname: "Hariprasaath",
            studentage: 21,
            studentemail: "hariprasaath2002@gmail.com",
            studentplace: "Salem",
            pinnumber: 636007
        },
        {
            studentname: "Prethiyenkara Devi",
            studentage: 21,
            studentemail: "prethirajkumar2002@gmail.com ",
            studentplace: "Virudhachalam",
            pinnumber: 634099
        },
        {
            studentname: "sirred",
            studentage: 21,
            studentemail: "razzaksr0789@gmail.com",
            studentplace: "Salem",
            pinnumber: 637303
        }
    
];

export let Add=(get)=>
{
    Details.push(get);
}

export let List=()=>
{
    return Details;
}

export const Reading=(Index)=>
{
    return Details[Index];
}

export const Remove1=(index)=>
{
    Details=Details.filter(
        (data,pos)=>
        {
            return pos!== index;
        }
    )
    return Details;
}

export const Fetchexact = (name)=>
{
    const temp = Details.filter(
        (data, index)=>
        {
            return data.studentname === name;
        }
    )
    return temp[0];
}

export const replace=(data, pos)=>
{
    Details[pos]=data;
}