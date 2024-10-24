import { render, screen } from "@testing-library/react";
import Table from "./Table";
import { MOCK_MAP_DATA } from "../mocks/data.mock";

describe('Table', () => {
    it('should render [table headers] correctly', () => {
        render(<Table data={MOCK_MAP_DATA} />);
        const expectedHeaders = ['ID', 'Notes', 'Engineer ID', 'Coords [0]', 'Coords [1]'];

        expectedHeaders.forEach(header => expect(screen.getByText(header)).toBeInTheDocument());
    });

    it('should render [table data] correctly', () => {
        render((<Table data={MOCK_MAP_DATA} />));

        MOCK_MAP_DATA.map((_, index) => {
            expect(screen.getByTestId(`id-${index}`)).toBeInTheDocument();
            expect(screen.getByTestId(`notes-${index}`)).toBeInTheDocument();
            expect(screen.getByTestId(`engineerId-${index}`)).toBeInTheDocument();
            expect(screen.getByTestId(`lat-${index}`)).toBeInTheDocument();
            expect(screen.getByTestId(`lng-${index}`)).toBeInTheDocument();
        });
    });

    it('should render [empty state] on no-data', () => {
        render((<Table data={[]} />));

        expect(screen.getByText('No Data available')).toBeInTheDocument();
    });
});
