import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import FileUpload from "./GeneratePlot/FileUpload";
import { PositionProvider } from "./Contexts/PositionContext";
import ChemicalCalci from "./ChemicalCalculator/ChemicalCalci";
import ReactionKinetics from "./ChemicalCalculator/ReactionKinetics";
import Market from "./Ecommerce/Market";



import RateConstant from "./ReactionCalculator/RateConstant";
import TotalTime from "./ReactionCalculator/TotalTime";
import HalfLife from "./ReactionCalculator/HalfLife";
import Distillation from "./ChemicalCalculator/Distillation";
import MolarFlux from "./MassTransferCalculator/MolarFlux";
import EquimolarDiffusion from "./MassTransferCalculator/EquimolarDiffusion";
import MassTransfer from "./ChemicalCalculator/MassTransfer";
import Conduction from "./Heat Transfer Calculator/conduction";
import Convection from "./Heat Transfer Calculator/convection";
import Radiation from "./Heat Transfer Calculator/radiation";
import HeatTransfer from "./ChemicalCalculator/HeatTransfer";
import Thermodynamics from "./ChemicalCalculator/Thermodynamics";
import Isochoric from "./Thermodynamic calculator/isochoric";
import Isothermal from "./Thermodynamic calculator/isothermal";
import Isobaric from "./Thermodynamic calculator/isobaric";
import Adiabatic from "./Thermodynamic calculator/adiabatic";
import Assistant from "./Assistant/Assistant";


function App() {
  return (
    <PositionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="data-visulization" element={<FileUpload />} />
          <Route path="chemical-calculator" element={<ChemicalCalci />}>

            <Route path="reaction-kinetics" element={<ReactionKinetics />} >
                    <Route path="rate-constant" element={<RateConstant/>} /> 
                    <Route path="half-life" element={<HalfLife/>} /> 
                    <Route path="time-taken" element={<TotalTime/>} /> 
             </Route>

            {/* <Route path="distillaion" element={<Distillation/>}>
              <Route path="reyleigh-equation" element = {<p>Reyleigh</p>} />
              <Route path="number-of-plates" element = {<p>plates</p>} />
           
            </Route> */}

            <Route path="mass-transfer" element={<MassTransfer/>} >

                      <Route path ="molar-flux" element = {<MolarFlux/>}/>
                      <Route path="equimolar-counter-diffusion"  element ={<EquimolarDiffusion/>}/>
       
            </Route>

            <Route path="heat-transfter" element={<HeatTransfer/>} >

                    <Route path="conduction" element={<Conduction/>} />
                    <Route path="convection" element ={<Convection/>}/>
                    <Route path="radiation" element ={<Radiation/>}/>

             </Route>

            <Route path="thermodynamics" element={<Thermodynamics/>} >
               <Route path="Isochoric-work" element = {<Isochoric/>} />
               <Route path="Isothermal-work" element = {<Isothermal/>} />
               <Route path="Isobaric-work" element = {<Isobaric/>} />
               <Route path="Adiabatic-work" element = {<Adiabatic/>} />

            </Route>
            <Route
              path="fluid-flow-calculations"
              element={<p>Fluid Flow Calculations</p>}
            />
            <Route path="reactor-design" element={<p>Reactor Design </p>} />
            <Route
              path="mass-energy-balance"
              element={<p>Mass Energy Balance</p>}
            />
          </Route>
          <Route path="ai-assistant" element={<Assistant />} />
          {/* <Route path="chemical-market" element={<Market />} /> */}
        </Routes>
      </BrowserRouter>
    </PositionProvider>
  );
}

export default App;
