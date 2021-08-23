const dummyText = ['Soufflé jelly beans sesame snaps halvah chocolate cake chocolate bar marzipan. Wafer pastry tootsie roll chocolate cake apple pie chupa chups topping. Carrot cake cake sweet roll jelly-o liquorice gummies jelly carrot cake. Sugar plum tiramisu tiramisu chocolate cake biscuit. Jujubes marzipan dessert apple pie danish. Cake gummi bears chocolate cake sweet roll pie. Jelly danish candy marshmallow pie pudding jelly oat cake. Candy canes oat cake dessert wafer oat cake jelly-o cheesecake.',
    'Donut caramels brownie jelly candy canes. Fruitcake tootsie roll sweet roll jelly beans apple pie pudding candy bear claw. Caramels candy lemon drops sugar plum muffin muffin. Topping topping jelly beans jujubes cake candy canes cake jelly beans. Caramels chupa chups halvah marzipan oat cake tootsie roll marzipan soufflé. Macaroon brownie jelly cheesecake tootsie roll shortbread sugar plum tootsie roll bonbon. Shortbread cheesecake tootsie roll shortbread candy canes brownie.',
    'Croissant fruitcake carrot cake brownie lollipop. Cupcake lemon drops danish cookie oat cake chocolate muffin cake donut. Tiramisu cheesecake cookie chocolate cake halvah ice cream chocolate biscuit. Cotton candy jelly tiramisu jelly-o marzipan chupa chups sesame snaps jelly topping. Lemon drops ice cream chupa chups lollipop marshmallow apple pie chocolate liquorice candy. Lemon drops soufflé carrot cake oat cake tart caramels sweet toffee.', 'Apple pie powder cookie apple pie chupa chups. Cotton candy shortbread icing brownie donut pudding carrot cake gingerbread. Fruitcake sweet roll fruitcake danish apple pie topping jelly-o. Cupcake ice cream biscuit candy jujubes fruitcake. Biscuit jelly beans macaroon marshmallow candy canes topping dragée oat cake cotton candy. Carrot cake dessert cake biscuit ice cream pudding dragée sesame snaps dessert. Muffin sweet roll oat cake pie cotton candy jelly beans croissant sweet marzipan.', 'Wafer pudding ice cream ice cream dessert caramels dragée wafer cake. Jelly jujubes sweet marzipan candy. Donut bear claw bear claw pudding croissant croissant chocolate pie marzipan. Toffee bear claw lollipop lemon drops candy cotton candy cake muffin. Lollipop soufflé ice cream caramels danish sugar plum muffin gummies. Tootsie roll cotton candy soufflé pie bonbon. Ice cream marzipan powder pudding bonbon tootsie roll jelly beans shortbread lemon drops. Gummi bears chocolate cake candy canes candy wafer cookie.', 'Muffin apple pie oat cake tootsie roll jelly beans icing cotton candy. Cotton candy liquorice bonbon soufflé liquorice. Fruitcake cheesecake sesame snaps chocolate pastry pie halvah tootsie roll. Oat cake gummi bears halvah sweet roll sweet roll pie. Liquorice dessert chocolate bar sesame snaps soufflé bonbon carrot cake. Pie jelly cotton candy cheesecake gummi bears jelly-o cake.', 'Gingerbread chocolate bar lollipop apple pie topping donut soufflé. Cake carrot cake danish lollipop danish bear claw dessert macaroon cotton candy. Jelly beans tiramisu cake lollipop bear claw sweet soufflé pie. Liquorice chocolate cake marzipan dessert sesame snaps topping icing. Icing marshmallow candy tootsie roll dragée cake candy canes topping. Halvah cupcake cake apple pie wafer carrot cake cookie icing tart. Lollipop liquorice oat cake powder topping candy tootsie roll halvah brownie. Pie ice cream lemon drops jelly beans wafer. Tootsie roll chocolate bar muffin chocolate cake cake carrot cake pastry marzipan. Cake chocolate cake biscuit soufflé cupcake donut dragée.', 'Powder chocolate bar croissant tart jelly beans. Dessert muffin bear claw chocolate cake gummies liquorice bear claw cupcake chupa chups. Dragée croissant croissant cake tiramisu chupa chups candy canes topping biscuit. Jelly lollipop shortbread croissant biscuit biscuit muffin cake topping. Marshmallow gingerbread pie powder chupa chups chupa chups toffee pudding. Macaroon lemon drops cake danish muffin. Cookie gingerbread danish halvah muffin biscuit chupa chups brownie toffee.', 'Wafer oat cake toffee pudding marshmallow candy. Candy canes donut sesame snaps brownie dessert dessert macaroon cake. Marzipan croissant caramels pie marshmallow tootsie roll. Chocolate bar chocolate cake gingerbread cake cookie chocolate cake gummi bears topping powder. Icing shortbread gummi bears cheesecake pie gingerbread. Tootsie roll jelly-o gummi bears pastry pie lemon drops powder. Chupa chups liquorice danish chocolate cake bonbon. Jujubes bonbon brownie toffee tootsie roll pie toffee powder.'
];

/* selecting elements */
const form = document.querySelector('#form');
const itemNumber = document.querySelector('#amount');
const generate = document.querySelector('#btn-generate');
const texts = document.querySelector('#texts');
texts.style.padding = "10px";

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = parseInt(itemNumber.value);
    const random = Math.floor(Math.random() * dummyText.length);
    if (value < 0 || isNaN(value) || value > 10) {
        texts.innerHTML = `<p>${dummyText[random]}</p>`;
    }
    else {
        const sliceArry = dummyText.slice(0, value);
        const finalArray = sliceArry.map(function (singleDummy) {
            return `<p>${singleDummy}</p>`;
        }).join("");
        texts.innerHTML = finalArray;
    }

});