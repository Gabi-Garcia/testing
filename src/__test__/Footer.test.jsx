/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/**
 * @vitest-environment jsdom
 */

// eslint-disable-next-line no-unused-vars
import { render, screen} from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import { describe, test } from 'vitest';
import Footer from '../components/Footer';


describe("Footer", () => {
    test("El componente Footer debería tener el classname footer", () => {
        render(<Footer />)
        expect(screen.getByTestId("footer")).toHaveAttribute("class", "footer")
    });
    test("El componente Footer debería renderizar el componente : <FooterContainer>", () => {
        render(<Footer />)
        expect(screen.getByTestId("footer")).toHaveAttribute("class", "footer")
    });


})
    