/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title } = service;
  return (
    <div>
      <h1>{title}</h1>
      <form>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
        </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Order conform</button>
          </div>
        
      </form>
    </div>
  );
};

export default CheckOut;
