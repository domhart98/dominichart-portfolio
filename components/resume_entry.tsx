interface ResumeEntryProps {
  date: string;
  company: string;
  role: string;
  responsibilities: string[];
}

export default function ResumeEntry({
  date,
  company,
  role,
  responsibilities,
}: ResumeEntryProps) {
  return (
    <li className="group relative mb-16">

      {/* Diamond */}
      <div className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-cyan-400 transition-all duration-300 group-hover:-rotate-45 group-hover:bg-purple-500"/>

      {/* Content */}
      <div className=" ml-16 rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/50 group-hover:-translate-y-1">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs uppercase text-white">
          {date}
        </span>

        <h3 className="mt-4 text-2xl font-semibold text-white">
          {company}
        </h3>

        <h4 className="mb-4 text-cyan-400">
          {role}
        </h4>

        <ul className="space-y-2 text-white/70">
          {responsibilities.map((item, index) => (
            <li key={index}>
                {item}
            </li>
          ))}
        </ul>
      </div>

    </li>
  );
}