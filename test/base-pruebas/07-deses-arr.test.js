import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("debe retornar un string y un numero", () => {
    const [letters, numbers] = retornaArreglo();
    console.log(retornaArreglo);

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    //para determinar cualquier tipo de string
    expect(letters).toEqual(expect.any(String));
  });
});
