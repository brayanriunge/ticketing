import { useForm } from "react-hook-form";
type formValues = {
  name: string;
  venue: string;
  price: number;
  description: string;
  begin: number;
};

export default function Dashboard() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formValues>();
  return (
    <form action="">
      <div>
        <div>
          <input
            type="name"
            id="name"
            placeholder="Ticket Name"
            required
            {...register("name")}
          />
          {errors.name?.message && (
            <div className="text-red-500 text-sm">{errors.name.message}</div>
          )}
        </div>
        <div>
          <input
            type="text"
            id="venue"
            placeholder="Venue"
            required
            {...register("venue")}
          />
          {errors.venue?.message && (
            <div className="text-red-500 text-sm">{errors.venue.message}</div>
          )}
        </div>
        <div>
          <input
            type="text"
            id="description"
            placeholder="Description"
            required
            {...register("description")}
          />
          {errors.description?.message && (
            <div className="text-red-500 text-sm">
              {errors.description.message}
            </div>
          )}
        </div>
        <div>
          <input
            type="number"
            id="price"
            placeholder="Price"
            required
            {...register("price")}
          />
          {errors.price?.message && (
            <div className="text-red-500 text-sm">{errors.price.message}</div>
          )}
        </div>
        <div>
          <input
            type="number"
            id="begin"
            placeholder="Starts at what time"
            required
            {...register("begin")}
          />
          {errors.begin?.message && (
            <div className="text-red-500 text-sm">{errors.begin.message}</div>
          )}
        </div>
      </div>
    </form>
  );
}
