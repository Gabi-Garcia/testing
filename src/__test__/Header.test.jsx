/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/**
 * @vitest-enviroment jsdom
 */

// eslint-disable-next-line no-unused-vars
import { render, screen} from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import { describe, test } from 'vitest';
import Header from '../components/Header'


describe("Header", () =>{
    // test("Logo debería tener el siguiente texto alternativo: Logo Img", () => {
    //     render(<Header/>)
    //     expect(screen.getByRole("img")).toHaveAttribute("alt", "Logo Img");
    // });
    test("Heading debería tener el siguiente h2: Prueba", () => {
        render(<Header/>)
        expect(screen.getByTestId("title")).toHaveTextContent("Prueba");
    })
})