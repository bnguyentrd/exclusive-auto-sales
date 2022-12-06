function ModelsList() {


    return(
        <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
              <th>Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            {models.map((models) => {
              return (
                <tr key={models.id}>
                  <td>{ models.name }</td>
                  <td>{ models.picture_url }</td>
                  <td>{ models.manufacturer.name }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        </div>
        </>
    );
}