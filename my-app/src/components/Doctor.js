
import "../App.css";
import Vaccine from "./Vaccine";
import React, { useState, useEffect } from "react";
import AddVaccine from "./AddVaccine.js";


function Doctor() {
    const initVaccine = [
        {
          sno: 1,
          name: "BCG",
          desc: "Prevents tuberculosis (TB). Given at birth or as early as possible.",
          ageLimit: "0-1 month",
          govtPrice: 0,
          completed: false,
        },
        {
          sno: 2,
          name: "Hepatitis B",
          desc: "Prevents Hepatitis B, a serious liver infection. First dose at birth.",
          ageLimit: "0-1 month",
          govtPrice: 0,
          completed: false,
        },
        {
          sno: 3,
          name: "OPV (Oral Polio Vaccine)",
          desc: "Protects against poliovirus. First dose at birth.",
          ageLimit: "0-1 month",
          govtPrice: 0,
          completed: false,
        },
        {
          sno: 4,
          name: "DPT",
          desc: "Prevents diphtheria, pertussis, and tetanus. Multiple doses from 6 weeks to 6 years.",
          ageLimit: "6 weeks - 6 years",
          govtPrice: 0,
          completed: false,
        },
        {
          sno: 5,
          name: "Hib (Haemophilus influenzae type B)",
          desc: "Prevents Hib infections that can cause meningitis, pneumonia, and more.",
          ageLimit: "6 weeks - 6 years",
          govtPrice: 0,
          completed: false,
        },
        {
          sno: 6,
          name: "Rotavirus",
          desc: "Prevents rotavirus infection, which causes severe diarrhea in children.",
          ageLimit: "6 weeks - 8 months",
          govtPrice: 0,
          completed: false,
        },
        {
          sno: 7,
          name: "Measles",
          desc: "Protects against measles. First dose at 9-12 months, second dose at 16-24 months.",
          ageLimit: "9 months - 24 months",
          govtPrice: 0,
          completed: false,
        },
        {
          sno: 8,
          name: "MMR (Measles, Mumps, Rubella)",
          desc: "Protects against measles, mumps, and rubella. Given at 9 months and 15-18 months.",
          ageLimit: "9 months - 18 months",
          govtPrice: 0,
          completed: false,
        },
        {
          sno: 9,
          name: "Varicella (Chickenpox)",
          desc: "Prevents chickenpox. Given at 12-18 months.",
          ageLimit: "12 months - 18 months",
          govtPrice: 0,
          completed: false,
        },
        {
          sno: 10,
          name: "Typhoid",
          desc: "Protects against typhoid fever. First dose at 2 years.",
          ageLimit: "2 years",
          govtPrice: 0,
          completed: false,
        },
      ];
    
      const [vaccines, setVaccines] = useState(() => {
        const savedVaccines = localStorage.getItem("vaccines");
        return savedVaccines ? JSON.parse(savedVaccines) : initVaccine;
      });
      
      const [showCompleted, setShowCompleted] = useState(true);
    
      useEffect(() => {
        localStorage.setItem("vaccines", JSON.stringify(vaccines));
      }, [vaccines]);
    
      const onDelete = (vaccine) => {
        setVaccines(vaccines.filter((e) => e !== vaccine));
        localStorage.setItem("vaccines", JSON.stringify(vaccines));
      };
    
      const addVaccine = (name, desc, ageLimit, govtPrice) => {
        let sno = vaccines.length > 0 ? vaccines[vaccines.length - 1].sno + 1 : 1;
        const myVaccine = {
          sno: sno,
          name: name,
          desc: desc,
          ageLimit: ageLimit,
          govtPrice: govtPrice,
          completed: false,
        };
        setVaccines([...vaccines, myVaccine]);
      };
    
      const markComplete = (vaccine) => {
        const updatedVaccines = vaccines.map((v) => {
          if (v.sno === vaccine.sno) {
            v.completed = !v.completed;
            if (v.completed) {
              v.completionInfo = {
                completedBy: "Doctor Himanshu Garg",
                completedDate: new Date().toLocaleString(),
              };
            } else {
              v.completionInfo = null;
            }
          }
          return v;
        });
        setVaccines(updatedVaccines);
        localStorage.setItem("vaccines", JSON.stringify(updatedVaccines));
      };
      
      const toggleCompletedVisibility = () => {
        setShowCompleted(!showCompleted);
      };
     
      
      const resetVaccines = () => {
        setVaccines(initVaccine);
      };
    
      useEffect(() => {
        localStorage.setItem("vaccines", JSON.stringify(vaccines));
      }, [vaccines]);
  return (
    <>

            
              <Vaccine
                vaccines={vaccines}
                onDelete={onDelete}
                markComplete={markComplete}
                showCompleted={showCompleted}
              />
              <div className="container text-center my-3">
                <div className="d-inline-block">
                  <button
                    onClick={resetVaccines}
                    className="btn btn-danger mx-2"
                  >
                    Reset All
                  </button>
                  <button
                    onClick={toggleCompletedVisibility}
                    className="btn btn-secondary mx-2"
                  >
                    {showCompleted ? "Hide Completed" : "Show Completed"}
                  </button>
                </div>
              </div>
              {/* Add Vaccine form */}
              <AddVaccine addVaccine={addVaccine} />
            </>
          
        
    
     
  )
}

export default Doctor






