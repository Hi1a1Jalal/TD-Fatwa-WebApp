import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

const mockUseQuery = jest.fn();

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: () => mockUseQuery(),
}));

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
    };
  },
}));
mockUseQuery.mockReturnValue({
  data: [],
  isLoading: false,
  isError: false,
  error: null,
  isSuccess: true,
});
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  }),
) as jest.Mock;

describe("render Home Page", () => {
  it("render the static texts", async () => {
    const ui = await Page();
    render(ui);

    const heading = screen.getByText(
      "Find authentic answers quickly by searching our growing collection of Islamic Q&As.",
    );
    const headingTwo = screen.getByText("Have a question?");
    const headingThree = screen.getByText(
      "Join the Masjid Al-Istiqama Telegram channel.",
    );

    expect(heading).toBeInTheDocument();
    expect(headingTwo).toBeInTheDocument();
    expect(headingThree).toBeInTheDocument();
  });
});
