import { useState, useEffect } from 'react';
import { db } from "../firebase/config"
import { collection, query, orderBy, onSnapshot, where, QuerySnapshot, setDoc } from 'firebase/firestore';

export const useFetchDocument = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {

        async function loadData(){
            if (cancelled) return

            setLoading(true)

            const collectionRef = await collection(db, docCollection)

            try {
                let q

                // busca
                // dashboard

                q = await query(collectionRef, orderBy("createdAt", "desc"))

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })

                setLoading(false)

            } catch (error) {
                console.log(error)
                setError(error.message)

                etLoading(false)
            }
        }

        loadData()
    }, [docCollection, search, uid, cancelled])

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return documents, loading, error
}