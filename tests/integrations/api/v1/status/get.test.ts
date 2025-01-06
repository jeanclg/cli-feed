describe("/api/v1/status", () => {
  it("should return 200 status", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");

    expect(response.status).toBe(200);
  });
});
