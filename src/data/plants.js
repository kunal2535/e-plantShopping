const picture=(seed)=>`https://picsum.photos/seed/${seed}/600/400`;
export const plants=[
 {category:'Air Purifying Plants',items:[['Snake Plant',18],['Spider Plant',14],['Peace Lily',22],['Rubber Plant',24],['Boston Fern',16],['Areca Palm',28]]},
 {category:'Low Light Plants',items:[['ZZ Plant',20],['Pothos',12],['Chinese Evergreen',19],['Cast Iron Plant',21],['Heartleaf Philodendron',15],['Parlor Palm',25]]},
 {category:'Succulents and Cacti',items:[['Aloe Vera',13],['Jade Plant',17],['Echeveria',10],['Zebra Haworthia',11],['Golden Barrel Cactus',18],["Burro's Tail",16]]}
].map((group,groupIndex)=>({category:group.category,items:group.items.map(([name,cost],index)=>({id:groupIndex*6+index+1,name,cost,image:picture(`${groupIndex}-${index}`),description:`A beautiful ${name} for your indoor plant collection.`}))}));
