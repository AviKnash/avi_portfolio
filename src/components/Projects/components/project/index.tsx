'use client';
import React from 'react'
import styles from './style.module.scss';

interface IProject {
    index:number;
    title:string;
    manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function index({index, title, manageModal}:IProject) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
    )
}