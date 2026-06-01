import React from "react";
import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import { Home, Contact, Skills, About, Projects } from "../screens";

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </RouterRoutes>
  );
};
