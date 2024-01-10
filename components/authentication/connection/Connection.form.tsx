import React from 'react'

export default function ConnectionForm () {
    return (
        <>
        <form>
            <div>
                <h4 className="text-center font-bold mb-3"> Connectez-vous</h4>
                <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">Utilisateur</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <input id="email" name="username" placeholder="Nom d'utilisateur" required type="text" value="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>

                </div>
            </div>

            <div className="mt-6">
                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Mot de passe</label>
                <div className="mt-1 rounded-md shadow-sm">
                    <input id="password" placeholder="Mot de passe" name="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                </div>
            </div>

            <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:border-blue-800 focus:shadow-outline-green active:bg-blue-700 transition duration-150 ease-in-out">
                        Se connecter                </button>
                </span>
            </div>
        </form>
        </>
    )
}