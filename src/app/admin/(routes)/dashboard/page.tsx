const AdminDashboard = () => {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Here you can see an overview of all the hotels created within our
          system
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="p-4 border rounded">
          <h3>Total Properties</h3>
          <p className="text-5xl font-bold mt-2">10</p>
        </div>
        <div className="p-4 border rounded">
          <h3>Total Users</h3>
          <p className="text-5xl font-bold mt-2">05</p>
        </div>
        <div className="p-4 border rounded">
          <h3>Total Properties</h3>
          <p className="text-5xl font-bold mt-2">10</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
