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
import Main from '../components/Main' 


describe("Main", () => {
    test("El componente Main debería tener el classname main", () => {
        render(<Main />)
        expect(screen.getByTestId("main")).toHaveAttribute("class", "main")
    });
})
    