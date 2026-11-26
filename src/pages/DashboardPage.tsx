
import { useAuth } from '../contexts/AuthContext';

function DashboardPage() {
  const { user, profile, signOut } = useAuth();

  async function handleLogout() {
    try {
      await signOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between">
        <h1 className="text-2xl font-bold">ShieldDesk</h1>

        <button
          onClick={handleLogout}
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
        >
          Sign out
        </button>
      </header>

      <section className="mx-auto mt-16 max-w-5xl">
        <p className="text-sm text-sky-400">YOUR WORKSPACE</p>

        <h2 className="mt-3 text-3xl font-semibold">
          Welcome, {profile?.full_name || 'User'}
        </h2>

        <p className="mt-3 text-slate-400">
          You are signed in to ShieldDesk.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Account email</p>
            <p className="mt-2 font-medium">{user?.email}</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Account role</p>
            <p className="mt-2 font-medium capitalize">
              {profile?.role || 'Loading'}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;
