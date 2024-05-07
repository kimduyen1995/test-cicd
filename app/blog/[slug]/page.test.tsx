/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({params}: Params){
  return {title: `Post: ${params.slug}`}

}

export default function Page({params} : Params){
  return <> <h1>Slug: {params.slug}</h1> 
  <p>Hole Tex</p>
  <p>Welcome to Ho Chi Minh</p>
  </>
}