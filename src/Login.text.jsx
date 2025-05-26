import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, it, vi } from 'vitest'
import Login from './Login'

describe("Login Component", () => {
    let fetchSpy;
    beforeEach(()=>{
        fetchSpy = vi.spyOn(global, "fetch")
    })

    afterEach(() => { 
    fetchSpy.mockRestore()
   })  

   it("it calls fetch with correct URL", async () => {
    fetchSpy.mockResolvedValueOnce({
    ok: true,
    json: async() => ({name: "bob"})
    })
 render(<Login />)

   fireEvent.change(screen.getByLabelText("username"), {target: {value: "bob"}})
   
   fireEvent.click(screen.getAllByText("Log In"))

   const alert = await screen.findAllByRole("alert")
   expect(alert).toHaveTextContent("Welcome, bob")
   expect(fetchSpy).toBeCalledTimes(1)
   expect(fetchSpy).toHaveBeenCalledWith("https://www.google.com")
})
//    it("calls", () => {

//    });
})