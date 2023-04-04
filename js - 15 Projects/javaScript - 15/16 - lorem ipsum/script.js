
const text = ["Godard bicycle rights fixie proident mustache normcore direct trade kitsch praxis pitchfork eiusmod plaid. Dolore salvia la croix, cold-pressed beard chambray readymade umami. Occaecat cloud bread ethical hella gastropub qui. Anim laborum tempor, coloring book jawn live-edge try-hard 3 wolf moon proident quinoa tilde reprehenderit commodo ullamco VHS. Chicharrones small batch bespoke jawn gastropub food truck organic neutral milk hotel man braid.",
"Godard bicycle rights fixie proident mustache normcore direct trade kitsch praxis pitchfork eiusmod plaid. Dolore salvia la croix, cold-pressed beard chambray readymade umami. Occaecat cloud bread ethical hella gastropub qui. Anim laborum tempor, coloring book jawn live-edge try-hard 3 wolf moon proident quinoa tilde reprehenderit commodo ullamco VHS. Chicharrones small batch bespoke jawn gastropub food truck organic neutral milk hotel man braid.",
"Godard bicycle rights fixie proident mustache normcore direct trade kitsch praxis pitchfork eiusmod plaid. Dolore salvia la croix, cold-pressed beard chambray readymade umami. Occaecat cloud bread ethical hella gastropub qui. Anim laborum tempor, coloring book jawn live-edge try-hard 3 wolf moon proident quinoa tilde reprehenderit commodo ullamco VHS. Chicharrones small batch bespoke jawn gastropub food truck organic neutral milk hotel man braid.",
"Godard bicycle rights fixie proident mustache normcore direct trade kitsch praxis pitchfork eiusmod plaid. Dolore salvia la croix, cold-pressed beard chambray readymade umami. Occaecat cloud bread ethical hella gastropub qui. Anim laborum tempor, coloring book jawn live-edge try-hard 3 wolf moon proident quinoa tilde reprehenderit commodo ullamco VHS. Chicharrones small batch bespoke jawn gastropub food truck organic neutral milk hotel man braid.",
"Godard bicycle rights fixie proident mustache normcore direct trade kitsch praxis pitchfork eiusmod plaid. Dolore salvia la croix, cold-pressed beard chambray readymade umami. Occaecat cloud bread ethical hella gastropub qui. Anim laborum tempor, coloring book jawn live-edge try-hard 3 wolf moon proident quinoa tilde reprehenderit commodo ullamco VHS. Chicharrones small batch bespoke jawn gastropub food truck organic neutral milk hotel man braid.",
"Godard bicycle rights fixie proident mustache normcore direct trade kitsch praxis pitchfork eiusmod plaid. Dolore salvia la croix, cold-pressed beard chambray readymade umami. Occaecat cloud bread ethical hella gastropub qui. Anim laborum tempor, coloring book jawn live-edge try-hard 3 wolf moon proident quinoa tilde reprehenderit commodo ullamco VHS. Chicharrones small batch bespoke jawn gastropub food truck organic neutral milk hotel man braid.",
"Godard bicycle rights fixie proident mustache normcore direct trade kitsch praxis pitchfork eiusmod plaid. Dolore salvia la croix, cold-pressed beard chambray readymade umami. Occaecat cloud bread ethical hella gastropub qui. Anim laborum tempor, coloring book jawn live-edge try-hard 3 wolf moon proident quinoa tilde reprehenderit commodo ullamco VHS. Chicharrones small batch bespoke jawn gastropub food truck organic neutral milk hotel man braid.",
"Godard bicycle rights fixie proident mustache normcore direct trade kitsch praxis pitchfork eiusmod plaid. Dolore salvia la croix, cold-pressed beard chambray readymade umami. Occaecat cloud bread ethical hella gastropub qui. Anim laborum tempor, coloring book jawn live-edge try-hard 3 wolf moon proident quinoa tilde reprehenderit commodo ullamco VHS. Chicharrones small batch bespoke jawn gastropub food truck organic neutral milk hotel man braid."
]

const form = document.querySelector(".lorem-form");
const amount =document.getElementById("amount");
const result  = document.querySelector(".lorem-text")

form.addEventListener("submit",function(e){
    console.log("hello");
    e.preventDefault();
    const value =parseInt(amount.value);
    // console.log(isNaN(value))
    const random = Math.floor(Math.random()* text.length)
    if(isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`
    }
    else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item){
            return `<p class="result">${item}</p>`
        })
        .join("");
        result.innerHTML = tempText
    }
})