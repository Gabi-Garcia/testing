/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/**
 * @vitest-environment jsdom
 */

// eslint-disable-next-line no-unused-vars
import { render, screen, fireEvent} from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import { describe, test } from 'vitest';
import Form from '../components/Form' 
import React from 'react';



describe("Form", () => {
    test("El componente Form debería tener el id : form", () => {
        render(<Form />)
        expect(screen.getByRole("form")).toHaveAttribute("id", "form")
    });
    test("El form debería tener un button de type: submit", () => {
        render(<Form />)
        expect(screen.getByRole("button")).toHaveAttribute("type","submit")
    });
    test("debería cambiar el valor del input y enviar el formulario correctamente", () => {
        render(<Form />);
        const inputElement = screen.getByPlaceholderText('Dinos tu nombre');
        fireEvent.change(inputElement, { target: { value: 'Juan' } });
        expect(inputElement.value).toBe('Juan');
        const formElement = screen.getByTestId('form');
        fireEvent.submit(formElement);
        expect(screen.getByText('Te damos la bienvenida Juan!')).toBeInTheDocument();
      });
})
    