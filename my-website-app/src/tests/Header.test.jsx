import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';  


describe('Test: Header Komponente', () => {
    it('Alle Elemente der Komponente sind vorhanden', async () => {
        render(<Header />);
        const header = await screen.findByRole('banner');
        expect(header).toBeInTheDocument();
        const logoText = screen.getByText('DK');
        expect(logoText).toBeVisible();

        // TO-DO:
        // const navLinks = ['Start', 'Meine Projekte', 'Über mich', 'Kontakt'];
        // navLinks.forEach(linkedText => {
        //   expect(screen.getByText(linkedText)).toBeVisible();
        // });
    });
})