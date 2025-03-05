describe("/api/v1/status", () => {
  it("Status page", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const responseData = await response.json();

    const parsedDate = new Date(responseData.updated_at).toISOString();

    expect(responseData.updated_at).toEqual(parsedDate);
    expect(responseData.dependencies.database.version).toEqual("17.2");
    expect(responseData.dependencies.database.max_connections).toEqual(100);
    expect(responseData.dependencies.database.opened_connections).toEqual(1);
    expect(response.status).toBe(200);
  });
});
