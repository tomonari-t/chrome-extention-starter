describe("sum", () => {
    beforeAll(() => {
        spyOn(document, "getElementById").and.callFake(() => {
            console.log("doejdoj")
            return {
                onclick: {}
            }
        });
    });
    it("test", () => {
        const result = sum(1, 2);
        expect(result).toEqual(4);
    });
});
