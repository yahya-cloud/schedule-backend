import { Request } from "express";
import { Number, Types } from "mongoose";

export interface UserSchemaType {
  name: string;
  email: string;
  phone_number: Number;
  user_type: string;
  password: string;
}

export interface StaffSchemaType extends UserSchemaType {
  unique_id: string;
  photo: string;
}

export interface StudentSchemaType extends UserSchemaType {
  en_number: string;
  section: Types.ObjectId | undefined;
}

export interface SectionInfoSchemaType {
  section: string;
  batch_name: string;
}
export interface TeacherInfoSchemaType {
  subject_color: string;
  subject: string;
  teacher_info: Types.ObjectId | undefined;
}

export interface TimeTableSchemaType {
  subject_color: string;
  heading: string;
  sub_heading: string;
  start_time: Date;
  end_time: Date;
  subject: string;
  teacher_id: Types.ObjectId | undefined;
}

export interface SectionSchemaType {
  info: SectionInfoSchemaType;
  teachers: TeacherInfoSchemaType[];
  time_table: TimeTableSchemaType[];
}

export interface BatchSchemaType {
  name: string;
  sections: Types.ObjectId[];
}

export interface UnknowObj {
  [key: string]: any;
}

export interface userRequest extends Request {
  user?: { _id: string };
}