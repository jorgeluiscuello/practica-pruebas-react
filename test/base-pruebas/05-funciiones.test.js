import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuario debe retornar un objeto", () => {
    const name = "jorge";

    const user = getUsuarioActivo(name);
    expect(user).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
