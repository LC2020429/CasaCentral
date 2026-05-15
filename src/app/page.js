import Carrusel from "@/components/home/Carrusel";
import EducationGrades from "@/components/home/EducationGrades";
import ContactHome from "@/components/home/ContactHome";

export default function Home() {
  return (
    <div className="animate-fade-in-up">
      <Carrusel />
      <EducationGrades />
      <ContactHome />
    </div>
  );
}
