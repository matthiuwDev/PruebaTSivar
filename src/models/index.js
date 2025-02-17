import { User } from "./User.js";
import { Enterprise } from "./Enterprise.js";
import { Role } from "./Role.js";
import { UserEnterpriseRole } from "./UserEnterpriseRole.js";

Enterprise.belongsToMany(User, {
    through: UserEnterpriseRole,
    foreignKey: "nitEnterprise"
});

User.belongsToMany(Enterprise, {
    through: UserEnterpriseRole,
    foreignKey: "docUser"
});

Role.hasMany(UserEnterpriseRole, { foreignKey: "idRol" });
UserEnterpriseRole.belongsTo(Role, { foreignKey: "idRol" });
