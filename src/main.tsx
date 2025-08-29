import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import './scss/styles.scss'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import hashRouter from './hashRouter.js';

const root = document.getElementById('root');
if (!root) throw new Error("root missing in index.html");
createRoot(root).render(
    <StrictMode>
        <RouterProvider router={hashRouter} />
    </StrictMode>,
);
