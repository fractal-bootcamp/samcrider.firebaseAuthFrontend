import { UserInputDto } from "../../lib/services/Auth/types";

export type SignupProps = {
  signup: (signupObj: UserInputDto) => Promise<void>;
};

export type FormData = {
  email: string;
  password: string;
};
