export const getCars = async () => {
  const res = await fetch("http://localhost:3000/cars", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await res.json();
  return createCarsPayload(res, data);
};

export const getCar = async (id: string) => {
  const res = await fetch(`http://localhost:3000/cars/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await res.json();
  return createCarPayload(res, data);
};

export const createCar = async (formData: CarType) => {
  const res = await fetch(`http://localhost:3000/cars`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return createCarPayload(res, data);
};

export const updateCar = async (id: string, formData: CarType) => {
  const res = await fetch(`http://localhost:3000/cars/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return createCarPayload(res, data);
};

export const deleteCar = async (id: string) => {
  const res = await fetch(`http://localhost:3000/cars/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const data = await res.json();
  return createCarPayload(res, data);
};

const createCarPayload = (res: Response, data: any): CarPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};

const createCarsPayload = (res: Response, data: any): CarsPayload => {
  return {
    msg: data.msg,
    data: data.payload,
    status: res.status,
  };
};

export type CarPayload = {
  msg?: string;
  status: number;
  data: CarType;
};

export type CarsPayload = {
  msg?: string;
  status: number;
  data: CarType[];
};

export type CarType = {
  _id?: string;
  name: string;
  color: string;
  horsepower: number;
};
