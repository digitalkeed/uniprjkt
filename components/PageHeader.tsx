import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function PageHeader({
  breadcrumbs,
  title,
  titleEm,
  subtitle,
  children,
}: {
  breadcrumbs: Crumb[];
  title: string;
  titleEm?: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-header">
      <div className="wrap page-header-inner">
        <div className="page-header-breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} style={{ display: "contents" }}>
              {i > 0 && <span>/</span>}
              {crumb.href ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                crumb.label
              )}
            </span>
          ))}
        </div>
        <h1 className="page-header-title">
          {title} {titleEm && <em>{titleEm}</em>}
        </h1>
        {children}
        <p className="page-header-sub">{subtitle}</p>
      </div>
    </div>
  );
}
