type InputType = string | number | boolean | string[] | number[];

type GetUIDReturnType = string | number;

function getUID(input: InputType): GetUIDReturnType {
    return 234;  // You can change this return to be of type string or number as needed
}

console.log(getUID(true)); // Example usage with a boolean value
