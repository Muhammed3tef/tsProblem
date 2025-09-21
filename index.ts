import { Equal, Expect } from "@total-typescript/helpers"

type Direction = "up" | "down" | "left" | "right";


function move(direction: Direction, distance: number )  {
}

move("up", 10);
move("left", 5);

move(
    // @ts-expect-error - "up-right" is not a valid direction
    "up-right",
    10
);
  
move(
    // @ts-expect-error - "down-left" is not a valid direction
    "down-left",
    20
)

move(
    "down",
    // @ts-expect-error - "20" is not a valid direction
    "20"
)




/////////////////////////////


type Shape = {
    kind: "circle" | "square"; // it will be circle or square
    radius?: number; // only with circle
    sideLength?: number; // only with square
};

function calculateArea(shape: Shape) : number{
    if(shape.kind === 'circle'){
      if(shape.radius === undefined){
        throw new Error('Enter The Radius Please!!');
      }
      return Math.PI * shape.radius * shape.radius;
    }
    if(shape.sideLength === undefined ){
      throw new Error('Enter The SideLength!!')
    }
    return shape.sideLength * shape.sideLength
}

const square = calculateArea({
    kind: 'square',
    sideLength: 5
});




///////////////////////////////////


type User = {
    id: string;
};
type TrueAndUser = [true , User[]]
type FalseAndString = [false , string]
type ApiResposne = TrueAndUser | FalseAndString

async function fetchData(): Promise<ApiResposne> {
    try {
        const response = await fetch("https://api/example.com/data");
        if(!response.ok) {
            return [
                false,
                "an error occurred"
            ]
        }
        const data = await response.json() as User[];
        return [true, data]
    } catch(error) {
        return [false, "An errro occurred"]
    }
}


async function exampleFunc() {
    const [succeeded, value] = await fetchData();

    if(succeeded) {
        console.log(value);
        type test = Expect<Equal<typeof value, User[]>>;
    } else {
        console.error(value);
        type test = Expect<Equal<typeof value, string>>
    }
}





interface IProduct {
    id?: number;
    name: string;
    price: number;
    description: string
}

const updateProduct = (id: number, productInfo: IProduct) => {

}

// make this function accept any of IProduct interface except the id
updateProduct(1, {
    name: 'newProduct',
    price: 10,
    description: 'newProductDescripton',
});

updateProduct(1, {
    name: 'sceondProduct',
    price: 5,
    description: 'secondProductDescription'
})



//////////////////////////////////



export const returnWhatIPassIn = <T extends string>(genericString: T): T => genericString;

  const a = returnWhatIPassIn("a");

  type test1 = Expect<Equal<typeof a, "a">>;

  // @ts-expect-error
  returnWhatIPassIn(1);

  // @ts-expect-error
  returnWhatIPassIn(true);

  // @ts-expect-error
  returnWhatIPassIn({
    foo: "bar",
  });

//////////////////////////////////////////

  const returnBothOfWhatIPassIn = <A,B>(a: A, b: B) => {
  return {
    a,
    b,
  };
};

  const result = returnBothOfWhatIPassIn("a", 1);


  type test2 = Expect<
    Equal<
      typeof result,
      {
        a: string;
        b: number;
      }
    >
  >;

////////////////////////////////////////////


const array = [
  {
    name: "John",
  },
  {
    name: "Steve",
  },
];

const obj2 = array.reduce((accum : {name:string}, item : {name:string}) => {
  accum[item.name] = item;
  return accum;
}, {});


  type test3 = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];


//////////////////////////////////


function getValue<TObj>(obj: TObj, key: keyof TObj) {
  return obj[key];
}


const obj = {
  a: 1,
  b: 'some-string',
  c: true
}

const numberResult = getValue(obj, 'a');
const stringResult = getValue(obj, 'b');
const booleanResult = getValue(obj, 'c');

type tests = [
  Expect<Equal<typeof numberResult, number>>,
  Expect<Equal<typeof stringResult, string>>,
  Expect<Equal<typeof booleanResult, boolean>>
];
